<?php

namespace App\Rules\Account;

use App\Models\User\BankAccount;
use Illuminate\Contracts\Validation\Rule;

class UniqueUserBankAccountNumberRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @param int $userId
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return is_null(BankAccount::where([
            ['user_id', request()->user()->id],
            ['account_number', $value],
        ])->first());
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The account number already exists.';
    }
}
