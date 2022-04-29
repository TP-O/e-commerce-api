<?php

namespace App\Rules\Account;

use App\Models\User\CreditCard;
use Illuminate\Contracts\Validation\Rule;

class UniqueUserCreditCardNumberRule implements Rule
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
        return is_null(CreditCard::where([
            ['user_id', request()->user()->id],
            ['card_number', $value],
        ])->first());
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The card number already exists.';
    }
}
