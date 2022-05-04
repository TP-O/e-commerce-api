<?php

namespace App\Http\Controllers\Api\Account;

use App\Http\Controllers\Controller;
use App\Http\Requests\Account\BankAccount\CreateBankAccountRequest;
use App\Http\Requests\Account\BankAccount\DeleteBankAccountRequest;
use App\Http\Requests\Account\BankAccount\UpdateBankAccountRequest;
use App\Models\BankAccount;
use Illuminate\Http\Response;

class BankAccountController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Get all bank accounts of the current user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function all()
    {
        $bankAccounts = request()->user()->bankAccounts;

        return response()->json([
            'status' => true,
            'data' => $bankAccounts,
        ]);
    }

    /**
     * Create the user's bank account.
     *
     * @param \App\Http\Requests\Account\BankAccount\CreateBankAccountRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateBankAccountRequest $request)
    {
        $bankAccount = $request
            ->user()
            ->bankAccounts()
            ->create($request->validated());

        return response()->json([
            'status' => true,
            'data' => $bankAccount,
        ], Response::HTTP_CREATED);
    }

    /**
     * Update the user's bank account.
     *
     * @param \App\Http\Requests\Account\BankAccount\UpdateBankAccountRequest $request
     * @param \App\Models\BankAccount $bankAccount
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateBankAccountRequest $request, BankAccount $bankAccount)
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
     * @param \App\Http\Requests\Account\BankAccount\DeleteBankAccountRequest $request
     * @param \App\Models\BankAccount $bankAccount
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(DeleteBankAccountRequest $request, BankAccount $bankAccount)
    {
        $bankAccount->delete();

        return response()->json([
            'status' => true,
            'data' =>  'Bank account has been deleted!',
        ]);
    }
}
