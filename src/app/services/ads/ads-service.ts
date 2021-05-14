import { Ads } from '@app/models/ads/ads';
import { AdsProduct } from '@app/models/ads/ads-product';
import { Category } from '@app/models/product/category';
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
   * Delete advertisement strategy.
   *
   * @param adsId ads ID.
   */
  public async deleteAdsStrategy(adsId: number) {
    const { success } = await Ads.where([['id', '=', `${adsId}`]]).delete();

    return success;
  }

  /**
   * Update advertisement strategy.
   *
   * @param data ads data.
   */
  public async updateAdsStrategy(data: any) {
    const { success } = await Ads.where([['id', '=', `${data.id}`]]).update(
      data,
    );

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
      ['strategyId', '=', `${adsId}`],
      ['productId', '=', `${productId}`],
    ]).delete();

    return success;
  }

  /**
   * Get ads by ID.
   *
   * @param adsId ads ID.
   */
  public async getAdsById(adsId: number) {
    const { data } = await Ads.select('*')
      .where([['id', '=', `${adsId}`]])
      .get();

    return data?.first();
  }

  /**
   * Get all ads and sort startOn ACS.
   *
   */
  public async getAdsByType(typeId: number) {
    const { data } = await Ads.select('*')
      .where([
        ['advertisement_strategies.typeId', '=', `${typeId}`],
        [
          'advertisement_strategies.startOn',
          '>',
          'CAST(CURRENT_TIMESTAMP AS DATE)',
        ],
      ])
      .orderBy('advertisement_strategies.startOn', 'ASC')
      .get();

    return data?.all();
  }

  /**
   * Get category of Ads.
   *
   * @param adsId
   */
  public async getCategoryOfAds(adsId: number) {
    const { data } = await Ads.select('*')
      .join('product_categories')
      .on([
        ['advertisement_strategies.categoryId', '=', 'product_categories.id'],
      ])
      .where([['advertisement_strategies.id', '=', `${adsId}`]])
      .get();

    return data?.first();
  }

  /**
   * Get category of Product.
   *
   * @param productId
   */
  public async getCategoryOfProduct(productId: number) {
    const { data } = await Product.select('*')
      .join('product_categories')
      .on([['products.categoryId', '=', 'product_categories.id']])
      .where([['products.id', '=', `${productId}`]])
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
        'advertisement_strategies_products.quantity:quantity',
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
      .where([['advertisement_strategies.id', '=', `${adsId}`]])
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
    const { data: data1 } = await Category.select('*')
      .join('advertisement_strategies')
      .on([
        ['advertisement_strategies.categoryId', '=', 'product_categories.id'],
      ])
      .where([['advertisement_strategies.id', '=', `${adsId}`]])
      .get();

    const { data } = await Product.select('*')
      .join('sellers', 'left join')
      .on([['sellers.id', '=', 'products.sellerId']])
      .join('product_categories', 'left join')
      .on([['products.categoryId', '=', 'product_categories.id']])
      .where([
        ['product_categories.left', '>=', `${data1?.first().left}`],
        ['product_categories.left', '<=', `${data1?.first().right}`],
        ['sellers.id', '=', `${sellerId}`],
      ])
      .get();

    return data?.all();
  }
}
