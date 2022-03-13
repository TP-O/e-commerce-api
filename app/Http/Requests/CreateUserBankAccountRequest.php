<?php

namespace App\Http\Requests;

class CreateUserBankAccountRequest extends CustomFormRequest
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
            'owner_name' => 'required|string|max:64',
            'identification_number' => 'required|digits_between:9,12',
            'bank_name' => 'required|string',
            'bank_branch' => 'required|string',
            'account_number' => 'required|digits_between:9,17|unique:user_bank_accounts',
        ];
    }
}
