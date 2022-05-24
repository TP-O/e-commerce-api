<?php

namespace App\Services;

use App\Enums\ProductStatus;
use App\Models\Product\Product;
use App\Models\Product\ProductModel;
use App\Models\Product\WholesalePrice;
use Illuminate\Support\Arr;

class ProductService
{
    private QueryService $queryService;

    public function __construct(QueryService $queryService)
    {
        $this->queryService = $queryService;
    }

    /**
     * Create the product.
     *
     * @param array $productData
     * @return int
     */
    public function create(array $productData)
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

        $this->syncModels($product, $productData['models'], true);

        $product->wholesalePrices()->saveMany(
            array_map(function ($price) use ($product) {
                $price['product_id'] = $product->id;

                return new WholesalePrice($price);
            }, $productData['wholesale_prices'] ?? []),
        );

        $product->attributes()->attach($productData['attributes'] ?? []);
        $product->categories()->attach($productData['category_path']);

        return $product->id;
    }

    /**
     * Add new product models.
     *
     * @param \App\Models\Product\Product $product
     * @param array $producyModelsData
     * @return void
     */
    private function attachModels($product, array $productModelsData)
    {
        $product->models()->saveMany(
            array_map(function ($model) {
                return new ProductModel($model);
            }, $productModelsData),
        );

        return;
    }

    /**
     * Synchronize product models.
     *
     * @param \App\Models\Product\Product $product
     * @param array $producyModelsData
     * @return void
     */
    private function syncModels($product, array $productModelsData)
    {
        $retainingModelIds = [];
        $createdModels = [];
        $updatedModels = [];

        foreach ($productModelsData as $model) {
            $model['product_id'] = $product->id;

            if (isset($model['id'])) {
                array_push($retainingModelIds, $model['id']);
                array_push($updatedModels, $model);
            } else {
                array_push($createdModels, $model);
            }
        }

        ProductModel::where('product_id', $product->id)
            ->whereNotIn('id', $retainingModelIds)
            ->delete();

        $this->attachModels($product, $createdModels);

        $this->queryService->updateMultipleRecords(
            'product_models',
            $updatedModels,
            'id',
            function ($model) {
                $model['variation_index'] = json_encode($model['variation_index']);

                return $model;
            },
        );

        return;
    }

    /**
     * Update the product
     *
     * @param int $id
     * @param array $productData
     * @return void
     */
    public function update(int $id, array $productData)
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

        $this->syncModels($product, $productData['models']);

        $product->wholesalePrices()->delete();
        $product->wholesalePrices()->saveMany(
            array_map(function ($price) use ($product) {
                $price['product_id'] = $product['id'];

                return new WholesalePrice($price);
            }, $productData['wholesale_prices'] ?? []),
        );

        $product->attributes()->sync(
            collect($productData['attributes'] ?? [])->keyBy('attribute_id'),
        );
        $product->categories()->sync($productData['category_path']);

        return;
    }

    /**
     * Get prices of the product models.
     *
     * @param array $productData
     * @return array
     */
    public function getPrices(array $productData)
    {
        $modelIds = [];

        foreach ($productData as $key => $product) {
            $modelIds[$key] = $product['product_model_id'];
        }

        if (empty($modelIds)) {
            return [];
        }

        $models = ProductModel::whereIn('id', $modelIds)
            ->orderByRaw('ARRAY_POSITION(ARRAY[' . join(',', $modelIds) . '], id)')
            ->with('wholesalePirces')
            ->get();

        $prices = $models->map(function ($model, $key) use ($productData) {
            $wholesalePrice = $model->wholesalePirces
                ->where('min', '<=', $productData[$key]['quantity'])
                ->firstWhere('max', '>=', $productData[$key]['quantity']);

            $pricePerOne = is_null($wholesalePrice)
                ? $model->price
                : $wholesalePrice->price;

            $price = $pricePerOne * $productData[$key]['quantity'];
            $finalPrice = $price;

            return [
                'product_id' => $model->product_id,
                'product_model_id' => $model->id,
                'is_wholesale_price_applied' => isset($wholesalePrice),
                'variation_index' => $model->variation_index,
                'total_price' => round($price, 2),
                'final_total_price' => round($finalPrice, 2),
            ];
        })
            ->toArray();

        return $prices;
    }
}
