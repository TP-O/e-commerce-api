<?php

namespace App\Http\Requests\Account\BankAccount;

use App\Http\Requests\CustomFormRequest;
use App\Models\BankAccount;
use App\Rules\UniquePolymorphicOneToManyOwnedByCurrentUserRule;

class CreateBankAccountRequest extends CustomFormRequest
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
            'accountholder_name' => 'required|string|max:64',
            'identification_number' => 'required|digits_between:9,12',
            'bank_name' => 'required|string',
            'bank_branch' => 'required|string',
            'account_number' => [
                'required',
                'digits_between:9,17',
                new UniquePolymorphicOneToManyOwnedByCurrentUserRule(
                    BankAccount::class,
                    'bank_accountable',
                ),
            ],
        ];
    }
}
