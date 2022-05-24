<?php

namespace App\Http\Requests\Product;

use App\Enums\ProductOrder;
use App\Models\Product\Category;
use App\Rules\BatchExistsRule;

class SearchProductRequest extends GetProductRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            ...parent::rules(),
            ...$this->requireAtLeastOne([
                'keyword' => 'string',
                'filter.category_ids' => [
                    'array',
                    new BatchExistsRule(Category::class, null, 'id'),
                ],
            ]),
            'order_by' => 'required|integer|min:1|max:' . count(ProductOrder::cases()),
        ];
    }
}
