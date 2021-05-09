import { AdsService } from '@app/services/ads/ads-service';
import { InsertProductToAdsValidator } from '@app/validators/ads/insert-product-to-ads-validator';
import { CreateAdsValidator } from '@app/validators/ads/create-ads-validator';
import { Request, Response } from 'express';
import { format } from '@modules/helper';
import { autoInjectable } from 'tsyringe';
import { HttpRequestError } from '@app/exceptions/http-request-error';

@autoInjectable()
export class AdsController {
  /**
   * Constructor.
   *
   * @param _adsService ads service.
   */
  public constructor(
    private _createAdsValidator: CreateAdsValidator,
    private _insertProductToAdsValidator: InsertProductToAdsValidator,
    private _adsService: AdsService,
  ) {}

  /**
   *
   * Create ads.
   */
  public createAdsStrategy = async (req: Request, res: Response) => {
    const input = await this._createAdsValidator.validate(req.body);
    const success = await this._adsService.createAdsStrategy(input);
    console.log('input: ' + input);

    if (!success) {
      throw new HttpRequestError(500, 'Unable to create Ads Strategy');
    }

    return res.status(201).json({
      success: true,
      message: 'Create Ads Strategy successfully',
    });
  };

  /**
   *
   * Add products to ads.
   */
  public insertProductToAds = async (req: Request, res: Response) => {
    const input = await this._insertProductToAdsValidator.validate(req.body);
    await this.checkPercent(input.strategyId, input.percent);
    await this.checkAmount(input.productId, input.amount);
    const success = await this._adsService.insertProductToAds(input);

    if (!success) {
      throw new HttpRequestError(500, 'Unable to insert product to Ads');
    }

    return res.status(201).json({
      success: true,
      message: 'Insert product successfully',
    });
  };

  /**
   * 
   * Delete product to ads.
   */
  public deleteProductToAds = async (req: Request, res: Response) => {
    const success = await this._adsService.deleteProductToAds(
      req.body.adsId,
      req.body.productId,
    );

    if (!success) {
      throw new HttpRequestError(500, 'Unable to delete product to Ads');
    }

    return res.status(201).json({
      success: true,
      message: 'Delete product successfully',
    });
  };

  /**
   * 
   * Get Ads by id.
   * 
   */
  public getAdsById = async (req: Request, res: Response) => {
    const data = await this._adsService.getAdsById(req.body.adsId);
    console.log(req.body);

    if (!data) {
      throw new HttpRequestError(404, 'Unable to get Ads');
    }

    return res.status(200).json({
      data: format(data),
      message: 'Get Ads successfully',
    });
  };
  /**
   * 
   * Get product's amount.
   * 
   */
  public getProductAmount = async (req: Request, res: Response) => {
    const data = await this._adsService.getProductAmount(req.body.id);

    if (!data) {
      throw new HttpRequestError(404, 'Unable to get product amount');
    }

    return res.status(200).json({
      data: format(data),
      message: 'Get product amount successfully',
    });
  };

  /**
   *
   * Get products of ads.
   */
  public getProductsOfAds = async (req: Request, res: Response) => {
    const data = await this._adsService.getProductsOfAds(req.body.adsId);
    console.log(req.body);

    if (!data) {
      throw new HttpRequestError(404, 'Unable to get products of Ads');
    }

    return res.status(200).json({
      data: format(data),
      message: 'Get products successfully',
    });
  };

  /**
   *
   * Get products of seller which appropriate to ads.
   */
  public getProductsOfSelller = async (req: Request, res: Response) => {
    const data = await this._adsService.getProductsOfSelller(
      req.body.adsId,
      req.body.sellerId,
    );

    if (!data) {
      throw new HttpRequestError(404, 'Unable to get products of seller');
    }

    return res.status(200).json({
      data: format(data),
      message: 'Get products of seller successfully',
    });
  };

  public checkPercent = async (adsId: number, percent: number) => {
    const ads = await this._adsService.getAdsById(adsId);
    const max = ads.max;
    const min = ads.min;
    if(percent < min || percent > max) {
      throw new HttpRequestError(401, 'Percent must be greater than min and smaller than max'); 
    }
  }

  public checkAmount = async (productId: number, productAmount: number) => {
    const product = await this._adsService.getProductAmount(productId);
    const amount = product.amount;
    if(productAmount > amount) {
      throw new HttpRequestError(401, 'The amount is greater than the amount of product');
    }
  }

  
}
