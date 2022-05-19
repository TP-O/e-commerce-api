<?php

namespace App\Http\Requests\Order;

use App\Http\Requests\CustomFormRequest;
use App\Rules\Order\ValidProductQuantityRule;

class AddToCartRequest extends CustomFormRequest
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
            'product_model_id' => 'required|integer|min:1|distinct:strict',
            'quantity' => [
                'required',
                'integer',
                'min:1',
                new ValidProductQuantityRule('product_model_id'),
            ],
        ];
    }
}
