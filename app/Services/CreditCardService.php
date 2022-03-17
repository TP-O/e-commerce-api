<?php

namespace App\Services;

use App\Models\User\CreditCard;

class CreditCardService
{
    /**
     * Get all credit cards of an user.
     *
     * @param int $userId
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllUserCreditCards($userId)
    {
        return CreditCard::where('user_id', $userId)->get();
    }

    /**
     * Create an user's credit card.
     *
     * @param int $userId
     * @param array<string, any> $input
     * @return \App\Models\User\CreditCard
     */
    public function createUserCreditCard($userId, $input)
    {
        $creditCard = new CreditCard([
            ...$input,
            'user_id' => $userId,
        ]);

        $creditCard->save();

        return $creditCard;
    }

    /**
     * Update the user's credit card.
     *
     * @param int $userId
     * @param int $creditCardId
     * @param array<string, any> $input
     * @return bool
     */
    public function updateUserCreditCard($userId, $creditCardId, $input)
    {
        return CreditCard::where([
            ['id', $creditCardId],
            ['user_id', $userId],
        ])->update($input);
    }

    /**
     * Delete the user's credit card.
     *
     * @param int $userId
     * @param int $creditCardId
     * @return bool
     */
    public function deleteUserCreditCard($userId, $creditCardId)
    {
        return CreditCard::where([
            ['id', $creditCardId],
            ['user_id', $userId],
        ])->delete();
    }
}
