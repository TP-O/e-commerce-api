<?php

namespace App\Http\Requests\Product;

use App\Models\Product\Product;
use App\Rules\DistinctArrayKeyRule;
use App\Rules\Product\ValidNumberOfProducModelsRule;
use App\Rules\Product\ValidProducModelVariationIndexesRule;
use App\Rules\Product\ValidProductAttributesRule;
use App\Rules\Product\ValidProductBrandRule;
use App\Rules\Product\ValidProductCategoryPathRule;
use App\Rules\Product\ValidProductWholesalePricesRule;

class UpdateProductRequest extends CreateOrUpdateProductRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $shopId = $this->user()->id;
        $productIds = array_map(
            function ($product) {
                return $product['id'];
            },
            $this->input('products')
        );

        return parent::authorize() && Product::where('shop_id', $shopId)
            ->whereIn('id', $productIds)
            ->count() === count($productIds);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'products' => 'required|array',
            'products.*.id' => 'required|integer|min:1',
            'products.*.brand_id' => [
                'required',
                'integer',
                'min:1',
                new ValidProductBrandRule('category_path'),
            ],
            'products.*.is_published' => 'required|boolean',
            'products.*.name' => 'required|string|min:10|max:120',
            'products.*.description' => 'string|min:50',
            'products.*.weight' => 'required|numeric|min:0.1|max:999999',
            'products.*.images' => 'required|array|min:1|max:9',
            'products.*.images.*' => 'string|min:32|max:32|distinct:strict',
            'products.*.videos' => 'array|max:1',
            'products.*.videos.*' => [
                'string',
                'regex:/^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/',
                'distinct:strict',
            ],
            'products.*.attributes' => [
                'array',
                new ValidProductAttributesRule('category_path'),
            ],
            'products.*.attributes.*.attribute_id' => 'integer|min:1',
            'products.*.attributes.*.value' => 'required|string',
            'products.*.attributes.*.unit' => 'string|nullable',
            'products.*.variations' => 'array|max:2',
            'products.*.variations.*.name' => 'required|string|max:14|distinct:strict',
            'products.*.variations.*.options' => 'required|array|min:1',
            'products.*.variations.0.options.*' => 'required|string|min:1|max:20|distinct:strict',
            'products.*.variations.1.options.*' => 'required|string|min:1|max:20|distinct:strict',
            'products.*.category_path' => [
                'required',
                'array',
                new ValidProductCategoryPathRule(),
            ],
            'products.*.category_path.*' => 'integer|min:1|distinct:strict',
            'products.*.wholesale_prices' => [
                'array',
                new ValidProductWholesalePricesRule('models'),
            ],
            'products.*.wholesale_prices.*.min' => 'required|integer|min:0|distinct:strict',
            'products.*.wholesale_prices.*.max' => 'required|integer|gt:wholesale_prices.*.min',
            'products.*.wholesale_prices.*.price' => 'required|numeric|min:0.5',
            'products.*.models' => [
                'required',
                'array',
                new DistinctArrayKeyRule('variation_index'),
                new ValidNumberOfProducModelsRule('variations'),
                new ValidProducModelVariationIndexesRule('variations', 'variation_index'),
            ],
            'products.*.models.*.sku' => 'nullable|string',
            'products.*.models.*.price' => 'numeric|min:0.5',
            'products.*.models.*.stock' => 'required|integer|min:0',
            'products.*.models.*.variation_index' => 'array|max:2',
            'products.*.models.*.variation_index.*' => 'integer|min:0',
        ];
    }
}
