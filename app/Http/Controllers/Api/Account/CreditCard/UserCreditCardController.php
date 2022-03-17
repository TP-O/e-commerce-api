<?php

namespace App\Http\Controllers\Api\Account\CreditCard;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserCreditCardRequest;
use App\Http\Requests\UpdateUserCreditCardRequest;
use App\Services\CreditCardService;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class UserCreditCardController extends Controller
{
    private CreditCardService $creditCardService;

    public function __construct(CreditCardService $creditCardService)
    {
        $this->creditCardService = $creditCardService;

        $this->middleware('auth:sanctum');
    }

    /**
     * Get all credit cards of an user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        $creditCards = $this->creditCardService->getAllUserCreditCards(
            auth()->user()->id,
        );

        return response()->json([
            'status' => true,
            'data' => $creditCards,
        ]);
    }

    /**
     * Store the user's credit card.
     *
     * @param \App\Http\Requests\CreateUserCreditCardRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateUserCreditCardRequest $request)
    {
        $createUserCreditCard = $request->validated();

        $creditCard = $this->creditCardService->createUserCreditCard(
            auth()->user()->id,
            $createUserCreditCard,
        );

        return response()->json([
            'status' => true,
            'data' => $creditCard,
        ]);
    }

    /**
     * Update the user's credit card.
     *
     * @param \App\Http\Requests\UpdateUserCreditCardRequest $request
     * @param int $creditCard
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateUserCreditCardRequest $request, $creditCard)
    {
        $updateUserCreditCard = $request->validated();

        $status = $this->creditCardService->updateUserCreditCard(
            auth()->user()->id,
            $creditCard,
            $updateUserCreditCard,
        );

        if (!$status) {
            throw new BadRequestHttpException('Nothing to update!');
        }

        return response()->json([
            'status' => true,
            'data' =>  'Credit card has been updated!',
        ]);
    }

    /**
     * Delete the user's credit card.
     *
     * @param int $creditCard
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($creditCard)
    {
        $status = $this->creditCardService->deleteUserCreditCard(
            auth()->user()->id,
            $creditCard,
        );

        if (!$status) {
            throw new BadRequestHttpException('Nothing to delete!');
        }

        return response()->json([
            'status' => true,
            'data' =>  'Credit card has been deleted!',
        ]);
    }
}
