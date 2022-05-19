<?php

namespace App\Http\Requests\Product;

use App\Http\Requests\CustomFormRequest;
use App\Models\Addressable;
use App\Rules\ExistPolymorphicManyToManyOwnedByCurrentUserRule;
use App\Rules\Order\ValidProductQuantityRule;

class GetProductPriceRequest extends CustomFormRequest
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
            'products' => [
                'required',
                'array',
                new ValidProductQuantityRule('product_model_id', 'quantity'),
            ],
            'products.*.product_model_id' => 'required|integer|min:1',
            'products.*.quantity' => 'required|integer|min:1',
        ];
    }
}
