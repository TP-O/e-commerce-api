<?php

namespace App\Http\Requests\ProductCategory;

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
            'create.*.name' => 'required|string|min:5|max:50|distinct:strict',
            'create.*.units' => 'required|array',
            'create.*.units.*' => 'string|nullable|distinct:strict',
            'create' => [
                new BatchUniqueRule(CategoryAttribute::class, 'name'),
            ],

            // Update
            'update.*.id' => 'required|integer|min:1|distinct:strict',
            'update.*.name' => 'required|string|min:5|max:50|distinct:strict',
            'update.*.units' => 'required|array',
            'update.*.units.*' => 'string|nullable|distinct:strict',
            'update' => [
                new BatchExistsRule(CategoryAttribute::class, 'id'),
                new BatchUniqueRule(CategoryAttribute::class, 'name'),
            ],

            // Delete
            'delete.*.id' => 'required|integer|min:1|distinct:strict',
            'delete' => [
                new BatchExistsRule(CategoryAttribute::class, 'id'),
            ],
        ];
    }

    private function convertKeyOfArrayToJSON(array $arr, string $key)
    {
        return array_map(
            function ($val) use ($key) {
                $val[$key] = json_encode(array_map(
                    function ($val) {
                        return is_null($val) ? "" : $val;
                    },
                    $val[$key],
                ));

                return $val;
            },
            $arr,
        );
    }

    public function passedValidation()
    {
        if (!is_null($this->get('create'))) {
            $this->merge([
                'create' => $this->convertKeyOfArrayToJSON($this->get('create'), 'units'),
            ]);
        }

        if (!is_null($this->get('update'))) {
            $this->merge([
                'update' => $this->convertKeyOfArrayToJSON($this->get('update'), 'units'),
            ]);
        }
    }
}
