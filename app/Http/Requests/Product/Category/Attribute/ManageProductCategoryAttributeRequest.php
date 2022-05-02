<?php

namespace App\Http\Requests\Product\Category\Attribute;

use App\Http\Requests\CustomFormRequest;
use App\Models\Product\CategoryAttribute;
use App\Rules\BatchExistsRule;
use App\Rules\BatchUniqueRule;

class ManageProductCategoryAttributeRequest extends CustomFormRequest
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
            $this->requireAtLeastOne([
                'create' => 'array|min:1',
                'update' => 'array|min:1',
                'delete' => 'array|min:1',
            ]),

            // Create
            'create' => [
                new BatchUniqueRule(CategoryAttribute::class, 'name'),
            ],
            'create.*.name' => 'required|string|min:5|max:50|distinct:strict',
            'create.*.units' => 'required|array',
            'create.*.units.*' => 'string|nullable|distinct:strict',

            // Update
            'update' => [
                new BatchExistsRule(CategoryAttribute::class, 'id'),
                new BatchUniqueRule(CategoryAttribute::class, 'name'),
            ],
            'update.*.id' => 'required|integer|min:1|distinct:strict',
            'update.*.name' => 'required|string|min:5|max:50|distinct:strict',
            'update.*.units' => 'required|array',
            'update.*.units.*' => 'string|nullable|distinct:strict',

            // Delete
            'delete' => [
                new BatchExistsRule(CategoryAttribute::class, 'id'),
            ],
            'delete.*.id' => 'required|integer|min:1|distinct:strict',
        ];
    }
}
