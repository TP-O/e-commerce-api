<?php

namespace App\Http\Requests\Product\Category;

use App\Http\Requests\CustomFormRequest;
use App\Models\Product\Category;
use App\Rules\BatchExistsRule;

class GetProductCategoryAttributeRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'category_ids' => [
                'required',
                'array',
                new BatchExistsRule(Category::class, null, 'id'),
            ],
            'category_ids.*' => 'integer|min:1|distinct:strict',
        ];
    }
}
