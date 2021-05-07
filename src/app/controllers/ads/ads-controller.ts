import { Request, Response } from 'express';
import { format } from '@modules/helper';
import { HttpRequestError } from 'src/app/exceptions/http-request-error';
import { AdsService } from 'src/app/services/ads/ads-service';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class AdsController {
   /**
    * Constructor.
    * 
    * @param _adsService ads service. 
    */
  public constructor(
    private _adsService: AdsService,
  ) {}

  /**
   * 
   * Create ads.
   */
  public createAdsStrategy = async (req: Request, res: Response) =>  {
    const success = await this._adsService.createAdsStrategy({
        categoryId: req.body.categoryId,
        typeId: req.body.typeId,
        name: req.body.name,
        slug: req.body.slug,
        max: req.body.max,
        min: req.body.min,
        startOn: req.body.startOn,
        endOn: req.body.endOn
    });

    if (!success) {
        throw new HttpRequestError(500, 'Unable to create Ads Strategy');
      }
    
    return res.status(201).json({
        success: true,
        message: 'create Ads Strategy successfully'
    });
    };

    /**
     * 
     * Add products to ads.
     */
    public insertProductToAds = async (req: Request, res: Response) => {
        const success = await this._adsService.insertProductToAds({
            strategyId: req.body.strategyId,
            productId: req.body.productId,
            percent: req.body.percent,
            amount: req.body.amount,
        });

        if(!success) {
            throw new HttpRequestError(500, 'Unable to insert product to Ads');
        }

        return res.status(201).json({
            success: true,
            message: 'insert product successfully'
        });
    };

    /**
     * 
     * Get products of ads.
     */
    public getProductsOfAds = async (req: Request, res: Response) => {
        const data = await this._adsService.getProductsOfAds(req.body.adsId);

        if(!data){
            throw new HttpRequestError(404, 'Unable to get products of Ads');
        }
        
        return res.status(200).json({
            data: format(data),
            message: 'get products successfully'
        });
    };

    /**
     * 
     * Get categories of ads.
     */
    public getCategoriesOfAds = async (req: Request, res: Response) => {
        const data = await this._adsService.getCategoryOfAds(req.body.adsId);

        if(!data){
            throw new HttpRequestError(404, 'Unable to get categories of Ads');
        }
        
        return res.status(200).json({
            data: format(data),
            message: 'get categories successfully'
        });
    };

    /**
     * 
     * Get products of seller which appropriate to ads.
     */
    public getProductsOfSelller = async (req: Request, res: Response) => {
        const data = await this._adsService.getProductsOfSelller(req.body.adsId, req.body.sellerId);

        if(!data){
            throw new HttpRequestError(404, 'Unable to get products of seller');
        }
        
        return res.status(200).json({
            data: format(data),
            message: 'get products of seller successfully'
        });
    };
}