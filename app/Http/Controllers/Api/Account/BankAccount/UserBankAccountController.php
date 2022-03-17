<?php

namespace App\Http\Controllers\Api\Account\BankAccount;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserBankAccountRequest;
use App\Http\Requests\UpdateUserBankAccountRequest;
use App\Services\BankAccountService;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class UserBankAccountController extends Controller
{
    private BankAccountService $bankAccountService;

    public function __construct(BankAccountService $bankAccountService)
    {
        $this->bankAccountService = $bankAccountService;

        $this->middleware('auth:sanctum');
    }

    /**
     * Get all bank accounts of an user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        $bankAccounts = $this->bankAccountService->getAllUserBankAccounts(
            auth()->user()->id,
        );

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
        $createUserBankAccount = $request->validated();

        $bankAccount = $this->bankAccountService->createUserBankAccount(
            auth()->user()->id,
            $createUserBankAccount,
        );

        return response()->json([
            'status' => true,
            'data' => $bankAccount,
        ]);
    }

    /**
     * Update the user's bank account.
     *
     * @param \App\Http\Requests\UpdateUserBankAccountRequest $request
     * @param int $bankAccountId
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateUserBankAccountRequest $request, $bankAccountId)
    {
        $updateBankAccountInput = $request->validated();

        if (empty($updateBankAccountInput)) {
            throw new BadRequestHttpException('Nothing to update!');
        }

        $status = $this->bankAccountService->updateUserBankAccount(
            auth()->user()->id,
            $bankAccountId,
            $updateBankAccountInput,
        );

        if (!$status) {
            throw new BadRequestHttpException('Nothing to update!');
        }

        return response()->json([
            'status' => true,
            'data' =>  'Bank account has been updated!',
        ]);
    }

    /**
     * Delete the user's bank account.
     *
     * @param int $bankAccountId
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($bankAccountId)
    {
        $status = $this->bankAccountService->deleteUserBankAccount(
            auth()->user()->id,
            $bankAccountId,
        );

        if (!$status) {
            throw new BadRequestHttpException('Nothing to delete!');
        }

        return response()->json([
            'status' => true,
            'data' =>  'Bank account has been deleted!',
        ]);
    }
}
