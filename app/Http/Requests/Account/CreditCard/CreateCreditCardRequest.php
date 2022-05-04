<?php

namespace App\Http\Requests\Account\CreditCard;

use App\Http\Requests\CustomFormRequest;
use App\Models\CreditCard;
use App\Rules\UniquePolymorphicOneToManyOwnedByCurrentUserRule;

class CreateCreditCardRequest extends CustomFormRequest
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
            'cardholder_name'  => 'required|string|max:64',
            'expiry_date' => [
                'required',
                'string',
                'regex:/^(0[1-9]|1[0-2])\/?([0-9]{2})$/',
            ],
            'cvv' => 'required|digits:3',
            'registration_address' => 'required|string',
            'postal_code' => 'required|digits:5',
            'card_number' => [
                'required',
                'digits:16',
                new UniquePolymorphicOneToManyOwnedByCurrentUserRule(
                    CreditCard::class,
                    'credit_cardable',
                ),
            ]
        ];
    }
}
