<?php

namespace App\Http\Requests\Product;

use App\Enums\ProductStatus;
use App\Models\Product\ProductModel;
use App\Rules\DistinctArrayKeyRule;
use App\Rules\ExistBelongToRelationshipRule;
use App\Rules\Product\ValidNumberOfProducModelsRule;
use App\Rules\Product\ValidProducModelVariationIndexesRule;
use App\Rules\Product\ValidProductAttributesRule;
use App\Rules\Product\ValidProductBrandRule;
use App\Rules\Product\ValidProductCategoryPathRule;
use App\Rules\Product\ValidProductWholesalePricesRule;
use App\Rules\Resource\ExistImageRule;

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
        $product = $this->route('product');

        return parent::authorize() &&
            $product->shop_id === $shopId &&
            $product->status_id !== ProductStatus::Deleted->value;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'brand_id' => [
                'required',
                'integer',
                'min:1',
                new ValidProductBrandRule('category_path'),
            ],
            'is_published' => 'required|boolean',
            'name' => 'required|string|min:10|max:120',
            'description' => 'string|min:50',
            'weight' => 'required|numeric|min:0.1|max:999999',
            'images' => 'required|array|max:9',
            'images.*' => [
                'string',
                'distinct:strict',
                new ExistImageRule(),
            ],
            'videos' => 'array|max:1',
            'videos.*' => [
                'string',
                'regex:/^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/',
                'distinct:strict',
            ],
            'attributes' => [
                'array',
                new ValidProductAttributesRule('category_path'),
            ],
            'attributes.*.attribute_id' => 'integer|min:1',
            'attributes.*.value' => 'required|string',
            'attributes.*.unit' => 'present|string|nullable',
            'variations' => 'array|max:2',
            'variations.*.name' => 'required|string|max:14|distinct:strict',
            'variations.*.options' => 'required|array|min:1',
            'variations.0.options.*' => 'required|string|min:1|max:20|distinct:strict',
            'variations.1.options.*' => 'required|string|min:1|max:20|distinct:strict',
            'category_path' => [
                'required',
                'array',
                new ValidProductCategoryPathRule(),
            ],
            'category_path.*' => 'integer|min:1|distinct:strict',
            'wholesale_prices' => [
                'array',
                new ValidProductWholesalePricesRule('models'),
            ],
            'wholesale_prices.*.min' => 'required|integer|min:0|distinct:strict',
            'wholesale_prices.*.max' => 'required|integer|gt:wholesale_prices.*.min',
            'wholesale_prices.*.price' => 'required|numeric|min:0.5',
            'models' => [
                'required',
                'array',
                new DistinctArrayKeyRule('variation_index'),
                new ValidNumberOfProducModelsRule('variations'),
                new ValidProducModelVariationIndexesRule('variations', 'variation_index'),
                new ExistBelongToRelationshipRule(
                    ProductModel::class,
                    'product_id',
                    $this->route('product')->id,
                    'id',
                ),
            ],
            'models.*.id' => 'integer', 'min:1',
            'models.*.sku' => 'nullable|string',
            'models.*.price' => 'numeric|min:0.5',
            'models.*.stock' => 'required|integer|min:0',
            'models.*.variation_index' => 'array|max:2',
            'models.*.variation_index.*' => 'integer|min:0',
        ];
    }
}
