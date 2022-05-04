<?php

namespace App\Http\Requests\Product\Category;

use App\Http\Requests\CustomFormRequest;
use App\Models\Product\CategoryAttribute;
use App\Rules\BatchExistsRule;

class BindCategoryAttributeRequest extends CustomFormRequest
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
            'binds' => [
                'required',
                'array',
                new BatchExistsRule(CategoryAttribute::class, 'attribute_id', 'id'),
            ],
            'binds.*.attribute_id' => 'required|integer|distinct:strict',
            'binds.*.is_required' => 'required|boolean',
        ];
    }
}
