<?php

namespace App\Rules;

use App\Models\User\CreditCard;
use Illuminate\Contracts\Validation\Rule;

class UniqueUserCreditCardNumber implements Rule
{
    private int $userId;

    /**
     * Create a new rule instance.
     *
     * @param int $userId
     * @return void
     */
    public function __construct($userId)
    {
        $this->userId = $userId;
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
            ['user_id', $this->userId],
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
