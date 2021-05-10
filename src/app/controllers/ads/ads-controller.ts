import { AdsService } from '@app/services/ads/ads-service';
import { InsertProductToAdsValidator } from '@app/validators/ads/insert-product-to-ads-validator';
import { CreateAdsValidator } from '@app/validators/ads/create-ads-validator';
import { Request, Response } from 'express';
import { format } from '@modules/helper';
import { autoInjectable } from 'tsyringe';
import { HttpRequestError } from '@app/exceptions/http-request-error';
import { ProductService } from '@app/services/product/product-service';

@autoInjectable()
export class AdsController {
  /**
   * Constructor.
   *
   * @param _adsService ads service.
   * @param _productService product service.
   * @param _createAdsValidator ads creation validator.
   * @param _insertProductToAdsValidator product insertion validator.
   */
  public constructor(
    private _adsService: AdsService,
    private _productService: ProductService,
    private _createAdsValidator: CreateAdsValidator,
    private _insertProductToAdsValidator: InsertProductToAdsValidator,
  ) {}

  /**
   * Get Ads by ID.
   */
  public getAdsById = async (req: Request, res: Response) => {
    const data = await this._adsService.getAdsById(parseInt(req.params.id, 10));

    if (!data) {
      throw new HttpRequestError(404, 'Ads not found');
    }

    return res.status(200).json({
      success: true,
      data: format(data),
    });
  };

  /**
   * Get products of ads.
   */
  public getProductsOfAds = async (req: Request, res: Response) => {
    const data = await this._adsService.getProductsOfAds(
      parseInt(req.params.id, 10),
    );

    if (!data) {
      throw new HttpRequestError(404, 'Ads not found');
    }

    return res.status(200).json({
      success: true,
      data: format(data),
    });
  };

  /**
   * Get products of seller which appropriate to ads.
   */
  public getProductsOfSelller = async (req: Request, res: Response) => {
    const data = await this._adsService.getProductsOfSelller(
      parseInt(req.params.id, 10),
      req.user.id,
    );

    if (!data) {
      throw new HttpRequestError(404, 'Can not get products of seller');
    }

    return res.status(200).json({
      data: format(data),
      message: 'Get products of seller successfully',
    });
  };

  /**
   * Create ads.
   */
  public createAdsStrategy = async (req: Request, res: Response) => {
    const input = await this._createAdsValidator.validate(req.body);

    const success = await this._adsService.createAdsStrategy({
      ...input,
      startOn: input.startOn.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      endOn: input.endOn.toISOString().replace(/T/, ' ').replace(/\..+/, ''), 
    });

    if (!success) {
      throw new HttpRequestError(500, 'Can not create Ads Strategy');
    }

    return res.status(201).json({
      success: true,
      message: 'Create Ads Strategy successfully',
    });
  };

  /**
   * Add products to ads.
   */
  public insertProductToAds = async (req: Request, res: Response) => {
    // Validate input
    const input = await this._insertProductToAdsValidator.validate(req.body);
    await this.validateProductId(input.strategyId, input.productId);
    await this.validatePercent(input.strategyId, input.percent);
    await this.validateQuantity(input.productId, input.quantity);

    const success = await this._adsService.insertProductToAds({
      ...input,
      adsId: req.params.id,
    });

    if (!success) {
      throw new HttpRequestError(500, 'Can not insert product to Ads');
    }

    return res.status(201).json({
      success: true,
      message: 'Insert product successfully',
    });
  };

  /**
   * Delete product from ads.
   */
  public deleteProductToAds = async (req: Request, res: Response) => {
    await this.validateDelete(req.body.productId, req.user.id);
    const success = await this._adsService.deleteProductToAds(
      parseInt(req.params.id, 10),
      parseInt(req.params.productId, 10),
    );


    if (!success) {
      throw new HttpRequestError(500, 'Can not delete product to Ads');
    }

    return res.status(201).json({
      success: true,
      message: 'Delete product successfully',
    });
  };

  /**
   * Validate sale-off percent.
   *
   * @param adsId ads ID.
   * @param percent sale-off.
   */
  private validatePercent = async (adsId: number, percent: number) => {
    const ads = await this._adsService.getAdsById(adsId);
    const max = ads.max;
    const min = ads.min;

    if (percent < min || percent > max) {
      throw new HttpRequestError(401, {
        percent: `Percent must be greater than ${min} and smaller than ${max}`,
      });
    }
  };

  /**
   * Validate product quantity.
   *
   * @param productId product ID.
   * @param joinedQuantity joined product quantity.
   */
  private validateQuantity = async (
    productId: number,
    joinedQuantity: number,
  ) => {
    const product = await this._productService.getById(productId);
    const quantity = product.quantity;

    if (joinedQuantity > quantity) {
      throw new HttpRequestError(401, {
        quantity: `The quantity is greater than ${quantity}`,
      });
    }
  };

  private validateProductId = async (adsId: number, product1Id: number) => {
    const categoryA = await this._adsService.getCategoryOfAds(adsId);
    const categoryALeft = categoryA?.left;
    const categoryARight = categoryA.right;

    const categoryB = await this._adsService.getCategoryOfProduct(product1Id);
    const categoryBLeft = categoryB?.left;
    

    if (!(categoryBLeft > categoryALeft && categoryBLeft < categoryARight)) {
      throw new HttpRequestError(401, {
        productId: 'The product is not appropriate to the Ads'
      });
    }
  };

  private validateDelete = async (productId: number, sellerId: number) => {
    const A = await this._productService.getById(productId);
    const B = A.sellerId;

    if (B != sellerId) {
      throw new HttpRequestError(401, {
        sellerId: 'Can not delete product of another sellers'
      });
    }
  }
}
