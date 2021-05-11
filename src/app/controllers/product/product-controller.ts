import { HttpRequestError } from '@app/exceptions/http-request-error';
import { FeedbackService } from '@app/services/product/feedback-service';
import { ProductService } from '@app/services/product/product-service';
import { format } from '@modules/helper';
import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class ProductController {
  /**
   * Constructor.
   *
   * @param _productService product service.
   * @param _feedbackService feedback service.
   */
  public constructor(
    private _productService: ProductService,
    private _feedbackService: FeedbackService,
  ) {}

  /**
   * Filter products.
   */
  public filter = async (req: Request, res: Response) => {
    const conditions = {
      category: req.params.category,
      ...req.query,
    };

    const data = await this._productService.filter(
      conditions,
      20,
      parseInt(`${req.query.page || '1'}`, 10),
    );

    if (!data) {
      throw new HttpRequestError(404, 'Products not found');
    }

    return res.status(200).json({
      data: format(data),
    });
  };

  /**
   * Get all products.
   */
  public all = async (req: Request, res: Response) => {
    const data = await this._productService.get(
      20,
      parseInt(`${req.query.page || '1'}`, 10),
    );

    if (!data) {
      throw new HttpRequestError(404, 'Products not found');
    }

    return res.status(200).json({
      success: true,
      data: format(data),
    });
  };

  /**
   * Get product by slug.
   */
  public get = async (req: Request, res: Response) => {
    const data = await this._productService.getBySlug(req.params.slug);

    if (!data) {
      throw new HttpRequestError(404, 'Product not found');
    }

    return res.status(200).json({
      success: true,
      data: format(data),
    });
  };

  public getFeedbacks = async (req: Request, res: Response) => {
    const data = await this._feedbackService.getByProductId(
      parseInt(req.params.id),
      10,
    );

    if (!data) {
      throw new HttpRequestError(404, 'Feedbacks not found');
    }

    return res.status(200).json({
      success: true,
      data: format(data),
    });
  };

  /**
   * Create product.
   */
  public create = async (req: Request, res: Response) => {
    const success = await this._productService.create({
      ...req.body,
      sellerId: req.user.id,
    });

    if (!success) {
      throw new HttpRequestError(500, 'Can not create product');
    }

    return res.status(200).json({
      success: true,
      message: 'Create successfully',
    });
  };

  /**
   * Update product.
   */
  public update = async (req: Request, res: Response) => {
    await this.validateSellerId(req.user.id, parseInt(req.params.id, 10));

    const success = await this._productService.update(
      parseInt(req.params.id, 10),
      req.body,
    );

    if (!success) {
      throw new HttpRequestError(500, 'Can not update product');
    }

    return res.status(200).json({
      success: true,
      message: 'Update successfully',
    });
  };

  /**
   * Delete product.
   */
  public delete = async (req: Request, res: Response) => {
    await this.validateSellerId(req.user.id, parseInt(req.params.id, 10));

    const success = await this._productService.delete(parseInt(req.params.id));

    if (!success) {
      throw new HttpRequestError(500, 'Can not delete product');
    }

    return res.status(200).json({
      success: true,
      message: 'Delete successfully',
    });
  };

  private validateSellerId = async (sellerId: number, productId: number) => {
    const product = await this._productService.getById(productId);

    if (!product) {
      throw new HttpRequestError(404, 'Product not found');
    }

    if (product.sellerId != sellerId) {
      throw new HttpRequestError(401, 'This product does not belong to you');
    }
  };
}
