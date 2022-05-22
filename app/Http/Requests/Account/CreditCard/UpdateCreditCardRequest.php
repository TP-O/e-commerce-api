<?php

namespace App\Http\Requests\Account\CreditCard;

use App\Models\CreditCard;
use App\Rules\UniquePolymorphicOneToManyOwnedByCurrentUserRule;

class UpdateCreditCardRequest extends AuthorizedCreditCardRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return $this->requireAtLeastOne([
            'cardholder_name'  => 'string|max:64',
            'expiry_date' => [
                'string',
                'regex:/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/',
            ],
            'cvv' => 'digits:3',
            'registration_address' => 'string',
            'postal_code' => 'digits:5',
            'card_number' => [
                'digits:16',
                new UniquePolymorphicOneToManyOwnedByCurrentUserRule(
                    CreditCard::class,
                    'credit_cardable',
                ),
            ]
        ]);
    }
}
