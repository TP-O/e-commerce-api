<?php

namespace App\Http\Requests\Product\Category\Attribute;

use App\Http\Requests\CustomFormRequest;

class CreateAttributeRequest extends CustomFormRequest
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
            'name' => 'required|string|min:5|max:50|distinct:strict',
            'units' => 'array',
            'units.*' => 'filled|distinct:strict',
            'category_id' => 'integer|exists:product_categories,id',
            'is_required' => 'required_with:category_id|boolean',
        ];
    }
}
