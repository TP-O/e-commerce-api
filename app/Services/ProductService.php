<?php

namespace App\Services;

use App\Enums\ProductStatus;
use App\Models\Product\Product;
use App\Models\Product\ProductModel;
use App\Models\Product\WholesalePrice;
use Illuminate\Support\Arr;

class ProductService
{
    public function createMany(array $inputs)
    {
        $productIds = [];

        foreach ($inputs as $input) {
            $product = Product::create([
                'shop_id' => auth()->user()->id,
                'status_id' => $input['is_published']
                    ? ProductStatus::Published
                    : ProductStatus::Delisted,
                ...Arr::only(
                    $input,
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
                    $model['product_id'] = $product['id'];

                    return new ProductModel($model);
                }, $input['models'])
            );

            $product->wholesalePrices()->saveMany(
                array_map(function ($price) use ($product) {
                    $price['product_id'] = $product['id'];

                    return new WholesalePrice($price);
                }, $input['wholesale_prices'] ?? []),
            );

            $product->attributes()->attach($input['attributes']);
            $product->categories()->attach($input['category_path']);

            array_push($productIds, $product->id);
        }

        return $productIds;
    }

    public function updateMany(array $inputs)
    {
        foreach ($inputs as $input) {
            $product = Product::find($input['id']);

            $product->update([
                'status_id' => $input['is_published']
                    ? ProductStatus::Published
                    : ProductStatus::Delisted,
                ...Arr::only(
                    $input,
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
                }, $input['models'])
            );

            $product->wholesalePrices()->delete();
            $product->wholesalePrices()->saveMany(
                array_map(function ($price) use ($product) {
                    $price['product_id'] = $product['id'];

                    return new WholesalePrice($price);
                }, $input['wholesale_prices'] ?? []),
            );

            $product->attributes()->sync($input['attributes'] ?? []);
            $product->categories()->sync($input['category_path'] ?? []);
        }

        return;
    }
}
