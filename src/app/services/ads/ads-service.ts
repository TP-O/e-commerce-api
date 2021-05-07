import { Ads } from '@app/models/ads/ads';
import { AdsProduct } from '@app/models/ads/ads-product';
import { AdsSeller } from '@app/models/ads/ads-seller';
import { ProductCategory } from '@app/models/product/category';
import { Product } from '@app/models/product/product';
import { singleton } from 'tsyringe';

@singleton()
export class AdsService {
    /**
     * Create advertisement strategy.
     * 
     * @param value ads data. 
     */
    public async createAdsStrategy(value: any) {
        const { success } = await Ads.create([{
            categoryId: value.categoryId,
            typeId: value.typeId,
            name: value.name,
            slug: value.slug,
            max: value.max,
            min: value.min,
            startOn: value.startOn,
            endOn: value.endOn,
        }]);
        
        return success;
    }

    /**
     * Insert products to ads
     * 
     * @param value product data
     */
    public async insertProductToAds(value: any) {
        const { success } = await AdsProduct.create([{
            strategyId: value.strategyId,
            productId: value.productId,
            percent: value.percent,
            amount: value.amount,
        }]);

        return success;
    }

    /**
     * Insert sellers to ads.
     * 
     * @param value seller data
     * @returns 
     */
    public async insertSellerToAds(value:any) {
        const { success } = await AdsSeller.create([{
            strategyId: value.strategyId,
            sellerId: value.sellerId,
        }]);

        return success;
    }

    /**
     * Get all the products of ads.
     * 
     * @param adsId id of ads.
     */
    public async getProductsOfAds(adsId:number) {
        const { data } = await Product
            .select('*')
            .addSelection('advertisement_strategies_products.percent:percent', 'advertisement_strategies_products.amount:amount')
            .join('advertisement_strategies_products')
            .on([['products.id', '=', 'advertisement_strategies_products.productId']])
            .join('advertisement_strategies')
            .on([
                ['advertisement_strategies_products.strategyId', '=', 'advertisement_strategies.id']])
            .where([['advertisement_strategies.id', '=', `v:${adsId}`]])
            .get();

        return data?.all();
    }

    /**
     * Get categories of ads
     * 
     * @param adsId: ads Id
     */
    public async getCategoriesOfAds(adsId: number) {
        const { data } = await ProductCategory
        .select('name')
        .join('advertisement_strategies', 'left join')
        .on([['advertisement_strategies.categoryId','=','product_categories.id']])
        .where([['advertisement_strategies.id', '=', `v:${adsId}`]])
        .get();

        return data?.all();
    }

    /**
     * Get sellers of ads
     * 
     * @param adsId: ads Id

     */

    /**
     * Get products of sellers which appropriate to ads
     * 
     * @param adsId ads Id
     * @param sellerId seller Id
     * @returns 
     */
    public async getProductsOfSelller(adsId: number, sellerId: number) {
        const { data: data1 } = await ProductCategory
        .select('name', 'level', 'left', 'right', 'description')
        .join('advertisement_strategies')
        .on([['advertisement_strategies.categoryId','=','product_categories.id']])
        .where([['advertisement_strategies.id', '=', `v:${adsId}`]])
        .get();

        const { data } = await Product
        .select('*')        
        .join('sellers', 'left join')
        .on([['sellers.id','=','products.sellerId']])
        .join('product_categories', 'left join')
        .on([['products.categoryId','=','product_categories.id']])
        .where([
            ['product_categories.left', '>=', `v:${data1?.first().left}`],
            ['product_categories.left', '<=', `v:${data1?.first().right}`],
            ['sellers.id', '=', `v:${sellerId}`],
        ])
        .get();

        return data?.all();
    }

}