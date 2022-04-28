<?php

namespace App\Http\Requests\Product;

use App\Http\Requests\CustomFormRequest;
use App\Rules\DistinctArrayRule;
use App\Rules\ValidNumberOfProducModelsRule;
use App\Rules\ValidProducModelVariationIndexesRule;
use App\Rules\ValidProductAttributesRule;
use App\Rules\ValidProductBrandRule;
use App\Rules\ValidProductCategoryPathRule;
use App\Rules\ValidWholesalePricesRule;

class CreateProductRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return !is_null(request()->user()->shop);
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
            'images' => 'required|array|min:1|max:9',
            'images.*' => 'string|min:32|max:32|distinct:strict',
            'videos' => 'array|min:1|max:1',
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
            'attributes.*.unit' => 'string|nullable',
            'variations' => 'array|max:2',
            'variations.*.name' => 'required|string|max:14|distinct:strict',
            'variations.*.options' => 'required|array|min:1',
            'variations.0.options.*' => 'required|string|min:1|max:20|distinct:strict',
            'variations.1.options.*' => 'required|string|min:1|max:20|distinct:strict',
            'category_path' => [
                'required',
                'array',
                'min:1',
                new ValidProductCategoryPathRule(),
            ],
            'category_path.*' => 'integer|min:1|distinct:strict',
            'wholesale_prices' => [
                'array',
                'min:1',
                new ValidWholesalePricesRule('models'),
            ],
            'wholesale_prices.*.min' => 'required|integer|min:0|distinct:strict',
            'wholesale_prices.*.max' => 'required|integer|gt:wholesale_prices.*.min',
            'wholesale_prices.*.price' => 'required|numeric|min:0.5',
            'models' => [
                'required',
                'array',
                new DistinctArrayRule('variation_index'),
                new ValidNumberOfProducModelsRule('variations'),
                new ValidProducModelVariationIndexesRule('variations', 'variation_index'),
            ],
            'models.*.sku' => 'nullable|string',
            'models.*.price' => 'numeric|min:0.5',
            'models.*.stock' => 'required|integer|min:0',
            'models.*.variation_index' => 'array|max:2',
            'models.*.variation_index.*' => 'integer|min:0',
        ];
    }
}
