<?php

namespace App\Services;

use App\Models\User\BankAccount;

class BankAccountService
{
    /**
     * Get all bank accounts of an user.
     *
     * @param int $userId
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllUserBankAccounts($userId)
    {
        return BankAccount::where('user_id', $userId)->get();
    }

    /**
     * Create an user's bank account.
     *
     * @param int $userId
     * @param array<string, any> $input
     * @return \App\Models\User\BankAccount
     */
    public function createUserBankAccount($userId, $input)
    {
        $bankAccount = new BankAccount([
            ...$input,
            'user_id' => $userId,
        ]);

        $bankAccount->save();

        return $bankAccount;
    }

    /**
     * Update the user's bank account.
     *
     * @param int $userId
     * @param int $bankAccountId
     * @param array<string, any> $input
     * @return bool
     */
    public function updateUserBankAccount($userId, $bankAccountId, $input)
    {
        return BankAccount::where([
            ['id', $bankAccountId],
            ['user_id', $userId],
        ])->update($input);
    }

    /**
     * Delete the user's bank account.
     *
     * @param int $userId
     * @param int $bankAccount
     * @return bool
     */
    public function deleteUserBankAccount($userId, $bankAccount)
    {
        return BankAccount::where([
            ['id', $bankAccount],
            ['user_id', $userId],
        ])->delete();
    }
}
