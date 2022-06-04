<?php

namespace App\Http\Requests\Order;

use App\Http\Requests\CustomFormRequest;
use App\Models\Addressable;
use App\Rules\ExistPolymorphicManyToManyOwnedByCurrentUserRule;
use App\Rules\Order\ValidProductQuantityRule;

class CreateOrderRequest extends CustomFormRequest
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
            'orders' => [
                'required',
                'array',
                new ValidProductQuantityRule('product_model_id', 'quantity'),
            ],
            'orders.*.product_model_id' => 'required|integer|min:1|distinct:strict',
            'orders.*.quantity' => 'required|integer|min:1',
            'address_id' => [
                'required',
                'integer',
                'min:1',
                new ExistPolymorphicManyToManyOwnedByCurrentUserRule(
                    Addressable::class,
                    'addressable',
                    'address_id',
                ),
            ],
        ];
    }
}
