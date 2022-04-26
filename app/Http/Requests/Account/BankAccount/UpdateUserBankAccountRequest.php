<?php

namespace App\Http\Requests\Account\BankAccount;

use App\Rules\UniqueUserBankAccountNumberRule;

class UpdateUserBankAccountRequest extends AuthorizedUserBankAccountRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return $this->requireAtLeastOne([
            'accountholder_name' => 'string|max:64',
            'identification_number' => 'digits_between:9,12',
            'bank_name' => 'string',
            'bank_branch' => 'string',
            'account_number' => [
                'digits_between:9,17',
                new UniqueUserBankAccountNumberRule($this->user()->id),
            ],
        ]);
    }
}
