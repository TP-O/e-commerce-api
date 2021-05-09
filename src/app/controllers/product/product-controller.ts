import { HttpRequestError } from '@app/exceptions/http-request-error';
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
   */
  public constructor(protected _productService: ProductService) {}

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
      parseInt(`${req.query.page || '0'}`, 10),
    );

    if (!data) {
      throw new HttpRequestError(500, 'Unknown error');
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
      parseInt(`${req.query.page || '0'}`, 10),
    );

    if (!data) {
      throw new HttpRequestError(404, 'Not found');
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
      throw new HttpRequestError(404, 'Not found');
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
      sellerId: req.user.id,
      ...req.body,
    });

    if (!success) {
      throw new HttpRequestError(500, 'Unable to create product');
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
    const success = await this._productService.update(
      parseInt(req.params.id, 10),
      req.body,
    );

    if (!success) {
      throw new HttpRequestError(500, 'Unable to update product');
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
    const success = await this._productService.delete(parseInt(req.params.id));

    if (!success) {
      throw new HttpRequestError(500, 'Unable to delete product');
    }

    return res.status(200).json({
      success: true,
      message: 'Delete successfully',
    });
  };
}
