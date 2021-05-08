import { Ads } from '@app/models/ads/ads';
import { AdsProduct } from '@app/models/ads/ads-product';
import { ProductCategory } from '@app/models/product/category';
import { Product } from '@app/models/product/product';
import { singleton } from 'tsyringe';

@singleton()
export class AdsService {
  /**
   * Create advertisement strategy.
   *
   * @param data ads data.
   */
  public async createAdsStrategy(data: any) {
    const { success } = await Ads.create([data]);

    return success;
  }

  /**
   * Insert products to ads.
   *
   * @param data product data.
   */
  public async insertProductToAds(data: any) {
    const { success } = await AdsProduct.create([data]);

    return success;
  }

  /**
   * Delete product in ads.
   *
   * @param adsId ads ID.
   * @param productId product ID.
   */
  public async deleteProductToAds(adsId: number, productId: number) {
    const { success } = await AdsProduct.where([
      ['strategyId', '=', `v:${adsId}`],
      ['productId', '=', `v:${productId}`],
    ]).delete();

    return success;
  }

  /**
   * Get number of specify products in ads.
   *
   * @param id product ID.
   */
  public async getProductAmount(id: number) {
    const { data } = await Product.select('amount')
      .where([['id', '=', `v:${id}`]])
      .get();

    return data?.first();
  }

  /**
   * Get ads by ID.
   *
   * @param adsId ads ID.
   */
  public async getAdsById(adsId: number) {
    const { data } = await Ads.select('*')
      .where([['id', '=', `v:${adsId}`]])
      .get();

    return data?.first();
  }

  /**
   * Get all the products of ads.
   *
   * @param adsId id of ads.
   */
  public async getProductsOfAds(adsId: number) {
    const { data } = await Product.select('*')
      .addSelection(
        'advertisement_strategies_products.percent:percent',
        'advertisement_strategies_products.amount:amount',
      )
      .join('advertisement_strategies_products')
      .on([['products.id', '=', 'advertisement_strategies_products.productId']])
      .join('advertisement_strategies')
      .on([
        [
          'advertisement_strategies_products.strategyId',
          '=',
          'advertisement_strategies.id',
        ],
      ])
      .where([['advertisement_strategies.id', '=', `v:${adsId}`]])
      .get();

    return data?.all();
  }

  /**
   * Get products of sellers which appropriate to ads
   *
   * @param adsId ads ID.
   * @param sellerId seller ID.
   */
  public async getProductsOfSelller(adsId: number, sellerId: number) {
    const { data: data1 } = await ProductCategory.select('*')
      .join('advertisement_strategies')
      .on([
        ['advertisement_strategies.categoryId', '=', 'product_categories.id'],
      ])
      .where([['advertisement_strategies.id', '=', `v:${adsId}`]])
      .get();

    const { data } = await Product.select('*')
      .join('sellers', 'left join')
      .on([['sellers.id', '=', 'products.sellerId']])
      .join('product_categories', 'left join')
      .on([['products.categoryId', '=', 'product_categories.id']])
      .where([
        ['product_categories.left', '>=', `v:${data1?.first().left}`],
        ['product_categories.left', '<=', `v:${data1?.first().right}`],
        ['sellers.id', '=', `v:${sellerId}`],
      ])
      .get();

    return data?.all();
  }
}
