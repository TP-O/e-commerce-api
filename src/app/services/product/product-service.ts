import { Product } from '@app/models/product/product';
import { singleton } from 'tsyringe';

@singleton()
export class ProductService {
  /**
   * Filter rely on category name.
   *
   * @param category category name
   */
  private filterCategory(category: string) {
    Product.join('product_categories')
      .on([['products.categoryId', '=', 'product_categories.id']])
      .andWhere([
        [
          'product_categories.left',
          '>=',
          `(SELECT \`left\` FROM product_categories WHERE name = '${category}')`,
        ],
      ])
      .andWhere([
        [
          'product_categories.right',
          '<=',
          `(SELECT \`right\` FROM product_categories WHERE name = '${category}')`,
        ],
      ]);
  }

  /**
   * Filter rely on brand name.
   *
   * @param brand brand name.
   */
  private filterBrand(brand: string) {
    Product.join('brands')
      .on([['products.brandId', '=', 'brands.id']])
      .andWhere([['brands.name', '=', `'${brand}'`]]);
  }

  /**
   * Filter rely on column value.
   *
   * @param cond filter conditions.
   */
  private filterColumnValue(cond: any) {
    Product.where((q) => {
      q.where([['products.id', '>=', '1']]);

      if (cond.name) {
        q.andWhere([['products.name', 'like', `'%${cond.name}%'`]]);
      }

      if (cond.min) {
        q.andWhere([['products.price', '>=', `${cond.min}`]]);
      }

      if (cond.max) {
        q.andWhere([['products.price', '<=', `${cond.max}`]]);
      }
    });
  }

  /**
   * Filter products rely on conditions.
   *
   * @param conditions filter conditions.
   * @param limit number of products.
   * @param from get from index.
   */
  public async filter(conditions: any, limit: string, offset?: string) {
    Product.select('*');

    if (conditions.category) {
      this.filterCategory(conditions.category);
    }

    if (conditions.brand) {
      this.filterBrand(conditions.brand);
    }

    this.filterColumnValue(conditions);

    const { data } = await Product.limit(`${offset || 0}, ${limit}`).get();

    return data?.all();
  }

  /**
   * Get products.
   *
   * @param limit number of products.
   * @param from get from index.
   */
  public async get(limit: string, offset?: string) {
    const { data } = await Product.select('*')
      .limit(`${offset || 0}, ${limit}`)
      .get();

    return data?.all();
  }

  /**
   * Get product by ID.
   *
   * @param id product ID.
   */
  public async getById(id: number) {
    const { data } = await Product.select('*')
      .with('brand', 'seller')
      .where([['products.id', '=', `${id}`]])
      .get();

    return data?.first();
  }

  /**
   * Create product.
   *
   * @param data product's data.
   */
  public async create(data: any) {
    const { id } = await Product.create([data]);

    return id;
  }

  /**
   * Update product.
   *
   * @param id product ID.
   * @param data product data.
   */
  public async update(id: number, data: any) {
    const { success } = await Product.where([['id', '=', `${id}`]]).update(
      data,
    );

    return success;
  }

  /**
   * Delete product.
   *
   * @param id product id.
   */
  public async delete(id: number) {
    const { success } = await Product.where([['id', '=', `${id}`]]).delete();

    return success;
  }
}
