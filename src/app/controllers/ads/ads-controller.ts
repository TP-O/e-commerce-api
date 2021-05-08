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
    const input = this._createAdsValidator.validate(req.body);
    const success = await this._adsService.createAdsStrategy(input);

    if (!success) {
      throw new HttpRequestError(500, 'Unable to create Ads Strategy');
    }

    return res.status(201).json({
      success: true,
      message: 'create Ads Strategy successfully',
    });
  };

  /**
   *
   * Add products to ads.
   */
  public insertProductToAds = async (req: Request, res: Response) => {
    const input = await this._insertProductToAdsValidator.validate(req.body);

    const success = await this._adsService.insertProductToAds(input);

    if (!success) {
      throw new HttpRequestError(500, 'Unable to insert product to Ads');
    }

    return res.status(201).json({
      success: true,
      message: 'insert product successfully',
    });
  };

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
      message: 'delete product successfully',
    });
  };

  public getProductAmount = async (req: Request, res: Response) => {
    const data = await this._adsService.getProductAmount(req.body.id);

    if (!data) {
      throw new HttpRequestError(404, 'Unable to get product amount');
    }

    return res.status(200).json({
      data: format(data),
      message: 'get product amount successfully',
    });
  };

  /**
   *
   * Get products of ads.
   */
  public getProductsOfAds = async (req: Request, res: Response) => {
    const data = await this._adsService.getProductsOfAds(req.body.adsId);

    if (!data) {
      throw new HttpRequestError(404, 'Unable to get products of Ads');
    }

    return res.status(200).json({
      data: format(data),
      message: 'get products successfully',
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
      message: 'get products of seller successfully',
    });
  };
}
