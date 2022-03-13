<?php

namespace App\Http\Requests;

class UpdateUserBankAccountRequest extends CustomFormRequest
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
            'owner_name' => 'string|max:64',
            'identification_number' => 'digits_between:9,12',
            'bank_name' => 'string',
            'bank_branch' => 'string',
            'account_number' => 'digits_between:9,17|unique:user_bank_accounts',
        ];
    }
}
