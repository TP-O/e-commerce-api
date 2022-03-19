<?php

namespace App\Http\Controllers\Api\Account\BankAccount;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserBankAccountRequest;
use App\Http\Requests\UpdateUserBankAccountRequest;
use App\Models\User\BankAccount;

class UserBankAccountController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Get all bank accounts of an user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        $bankAccounts = BankAccount::where('user_id', auth()->user()->id)->get();

        return response()->json([
            'status' => true,
            'data' => $bankAccounts,
        ]);
    }

    /**
     * Store the user's bank account.
     *
     * @param \App\Http\Requests\CreateUserBankAccountRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateUserBankAccountRequest $request)
    {
        $bankAccount = BankAccount::insert([
            ...$request->validated(),
            'user_id' => auth()->user()->id,
        ]);

        return response()->json([
            'status' => true,
            'data' => $bankAccount,
        ]);
    }

    /**
     * Update the user's bank account.
     *
     * @param \App\Http\Requests\UpdateUserBankAccountRequest $request
     * @param \App\Models\User\BankAccount $bankAccount
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateUserBankAccountRequest $request, BankAccount $bankAccount)
    {
        $bankAccount->update($request->validated());

        return response()->json([
            'status' => true,
            'data' =>  'Bank account has been updated!',
        ]);
    }

    /**
     * Delete the user's bank account.
     *
     * @param \App\Models\User\BankAccount $bankAccount
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(BankAccount $bankAccount)
    {
        $bankAccount->delete();

        return response()->json([
            'status' => true,
            'data' =>  'Bank account has been deleted!',
        ]);
    }
}
