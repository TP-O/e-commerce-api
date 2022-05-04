<?php

namespace App\Services;

use App\Enums\ProductStatus;
use App\Models\Product\Product;
use App\Models\Product\ProductModel;
use App\Models\Product\WholesalePrice;
use Illuminate\Support\Arr;

class ProductService
{
    /**
     * Create the product.
     *
     * @param array $productData
     * @return int
     */
    public function create($productData)
    {
        $product = Product::create([
            'shop_id' => auth()->user()->id,
            'status_id' => $productData['is_published']
                ? ProductStatus::Published
                : ProductStatus::Delisted,
            ...Arr::only(
                $productData,
                [
                    'brand_id',
                    'name',
                    'description',
                    'weight',
                    'images',
                    'videos',
                    'variations',
                ]
            ),
        ]);

        $product->models()->saveMany(
            array_map(function ($model) use ($product) {
                $model['product_id'] = $product->id;

                return new ProductModel($model);
            }, $productData['models'])
        );

        $product->wholesalePrices()->saveMany(
            array_map(function ($price) use ($product) {
                $price['product_id'] = $product->id;

                return new WholesalePrice($price);
            }, $productData['wholesale_prices'] ?? []),
        );

        $product->attributes()->attach($productData['attributes']);
        $product->categories()->attach($productData['category_path']);

        return $product->id;
    }

    /**
     * Update the product
     *
     * @param int $id
     * @param array $productData
     * @return void
     */
    public function update($id, $productData)
    {
        $product = Product::findOrFail($id);

        $product->update([
            'status_id' => $productData['is_published']
                ? ProductStatus::Published
                : ProductStatus::Delisted,
            ...Arr::only(
                $productData,
                [
                    'brand_id',
                    'name',
                    'description',
                    'weight',
                    'images',
                    'videos',
                    'variations',
                ],
            ),
        ]);

        $product->models()->delete();
        $product->models()->saveMany(
            array_map(function ($model) use ($product) {
                $model['product_id'] = $product['id'];

                return new ProductModel($model);
            }, $productData['models'] ?? [])
        );

        $product->wholesalePrices()->delete();
        $product->wholesalePrices()->saveMany(
            array_map(function ($price) use ($product) {
                $price['product_id'] = $product['id'];

                return new WholesalePrice($price);
            }, $productData['wholesale_prices'] ?? []),
        );

        $product->attributes()->sync(
            collect($productData['attributes'])->keyBy('attribute_id'),
        );
        $product->categories()->sync($productData['category_path']);

        return;
    }
}
