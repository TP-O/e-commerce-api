<?php

namespace App\Http\Requests\Product\Category;

use App\Http\Requests\CustomFormRequest;
use App\Models\Product\Category;
use App\Rules\BatchExistsRule;
use App\Rules\BatchUniqueRule;

class ManageProductCategoryRequest extends CustomFormRequest
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
                new BatchExistsRule(Category::class, 'parent_id', 'id'),
                new BatchUniqueRule(Category::class, 'name'),
            ],
            'create.*.parent_id' => 'nullable|integer|min:1',
            'create.*.name' => 'required|string|min:5|max:50|distinct:strict',
            'create.*.cover_image' => 'required|string|min:32|max:32',

            // Update
            'update' => [
                new BatchExistsRule(Category::class, 'id'),
                new BatchExistsRule(Category::class, 'parent_id', 'id'),
                new BatchUniqueRule(Category::class, 'name'),
            ],
            'update.*.id' => 'required|integer|min:1|distinct:strict',
            'update.*.parent_id' => 'nullable|integer|min:1',
            'update.*.name' => 'required|string|min:5|max:50|distinct:strict',
            'update.*.cover_image' => 'required|string|min:32|max:32',

            // Delete
            'delete' => [
                new BatchExistsRule(Category::class, 'id'),
            ],
            'delete.*.id' => 'required|integer|min:1|distinct:strict',
        ];
    }
}
