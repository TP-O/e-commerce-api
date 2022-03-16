<?php

namespace App\Http\Requests;

class UpdateUserCreditCardRequest extends CustomFormRequest
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
            'cardholder_name'  => 'string|max:64',
            'card_number' => 'digits:16',
            'expiry_date' => 'string|regex:/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/',
            'cvv' => 'digits:3',
            'registration_address' => 'string',
            'postal_code' => 'digits:5',
        ];
    }
}
