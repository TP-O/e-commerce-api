<?php

namespace App\Http\Requests\Account\BankAccount;

use App\Http\Requests\CustomFormRequest;

class AuthorizedBankAccountRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $bankAccount = $this->route('bank_account');

        return $bankAccount->bank_accountable_id === $this->user()->id &&
            $bankAccount->bank_accountable_type === get_class($this->user());
    }
}
