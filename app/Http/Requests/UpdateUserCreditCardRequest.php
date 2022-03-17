<?php

namespace App\Http\Requests;

use App\Models\User\CreditCard;
use App\Rules\UniqueUserCreditCardNumber;

class UpdateUserCreditCardRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return !is_null(CreditCard::where([
            ['id', $this->route('credit_card')->id],
            ['user_id', $this->user()->id],
        ])->first());
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return $this->requireLeastOne([
            'cardholder_name'  => 'string|max:64',
            'expiry_date' => 'string|regex:/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/',
            'cvv' => 'digits:3',
            'registration_address' => 'string',
            'postal_code' => 'digits:5',
            'card_number' => [
                'digits:16',
                new UniqueUserCreditCardNumber($this->user()->id),
            ]
        ]);
    }
}
