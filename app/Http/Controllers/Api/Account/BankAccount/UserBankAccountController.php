<?php

namespace App\Http\Controllers\Api\Account\BankAccount;

use App\Http\Controllers\Controller;
use App\Http\Requests\BankAccount\CreateUserBankAccountRequest;
use App\Http\Requests\BankAccount\DeleteUserBankAccountRequest;
use App\Http\Requests\BankAccount\UpdateUserBankAccountRequest;
use App\Models\User\BankAccount;
use Illuminate\Http\Response;

class UserBankAccountController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Get all bank accounts of the user.
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
     * @param \App\Http\Requests\BankAccount\CreateUserBankAccountRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateUserBankAccountRequest $request)
    {
        $bankAccount = BankAccount::create([
            ...$request->validated(),
            'user_id' => auth()->user()->id,
        ]);

        return response()->json([
            'status' => true,
            'data' => $bankAccount,
        ], Response::HTTP_CREATED);
    }

    /**
     * Update the user's bank account.
     *
     * @param \App\Http\Requests\BankAccount\UpdateUserBankAccountRequest $request
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
     * @param \App\Http\Requests\BankAccount\DeleteUserBankAccountRequest $request
     * @param \App\Models\User\BankAccount $bankAccount
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(DeleteUserBankAccountRequest $request, BankAccount $bankAccount)
    {
        $bankAccount->delete();

        return response()->json([
            'status' => true,
            'data' =>  'Bank account has been deleted!',
        ]);
    }
}
