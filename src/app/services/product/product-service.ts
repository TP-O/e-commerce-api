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
   * @param brands brand names.
   */
  private filterBrand(brands: string) {
    Product.join('brands').on([['products.brandId', '=', 'brands.id']]);

    const conditions = brands
      .split(',')
      .map((brand) => ['brands.name', '=', `'${brand}'`, 'OR']);

    Product.andWhere(conditions);
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
   * @param limit limit number of products.
   * @param offset get from index.
   */
  public async filter(conditions: any, limit: number, offset = 0) {
    Product.select('*');

    if (conditions.category) {
      this.filterCategory(conditions.category);
    }

    if (conditions.brand) {
      this.filterBrand(conditions.brand);
    }

    this.filterColumnValue(conditions);

    const { data } = await Product.limit(
      `${(offset - 1) * limit}, ${limit}`,
    ).get();

    return data?.all();
  }

  /**
   * Get products.
   *
   * @param limit limit number of products.
   * @param offset get from index.
   */
  public async get(limit: number, offset = 1) {
    const { data } = await Product.select('*')
      .addSelection('feedbacks.rating')
      .join('feedbacks')
      .on([['products.id', '=', '`feedbacks`.`productId`']])
      .avg('feedbacks.rating', 'rating')
      .groupBy('products`.`id')
      .limit(`${(offset - 1) * limit}, ${limit}`)
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
      .where([['id', '=', `${id}`]])
      .get();

    return data?.first();
  }

  /**
   * Get product by slug.
   *
   * @param slug product slug.
   */
  public async getBySlug(slug: string) {
    const { data } = await Product.select('*')
      .with('brand', 'seller', 'category')
      .addSelection('feedbacks.rating')
      .join('feedbacks')
      .on([['products.id', '=', '`feedbacks`.`productId`']])
      .avg('feedbacks.rating', 'rating')
      .where([['products.slug', '=', `'${slug}'`]])
      .groupBy('products`.`id')
      .get();

    return data?.first();
  }

  /**
   * Get product price by ID.
   *
   * @param id product Id.
   */
   public async getProductPrice(id: number) {
    const { data } = await Product.select('*')
      .where([['id', '=', `v:${id}`]])
      .first();

    return data?.price;
  }

  /**
   * Get current price of product.
   */
  public async getCurrentPrice(id: number, quantity = 1) {
    const product = await this.getById(id);

    return product.price * quantity;
  }

  /**
   * Update product.
   *
   * @param id product ID.
   * @param data product data.
   */
  public async updateQuantity(id: number, diff: number, increase = true) {
    const product = await this.getById(id);

    const quantity = increase
      ? product.quantity + diff
      : product.quantity - diff;

    if (quantity < 0) {
      return false;
    }

    product.quantity = quantity;

    const { success } = await product.save();

    return success;
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
