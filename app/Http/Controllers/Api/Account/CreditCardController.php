<?php

namespace App\Http\Controllers\Api\Account;

use App\Http\Controllers\Controller;
use App\Http\Requests\Account\CreditCard\CreateCreditCardRequest;
use App\Http\Requests\Account\CreditCard\DeleteCreditCardRequest;
use App\Http\Requests\Account\CreditCard\UpdateCreditCardRequest;
use App\Models\CreditCard;
use Illuminate\Http\Response;

class CreditCardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Get all credit cards of the user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        $creditCards = request()->user()->creditCards;

        return response()->json([
            'status' => true,
            'data' => $creditCards,
        ]);
    }

    /**
     * Create the user's credit card.
     *
     * @param \App\Http\Requests\Account\CreditCard\CreateCreditCardRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateCreditCardRequest $request)
    {
        $creditCard = $request
            ->user()
            ->creditCards()
            ->create($request->validated());

        return response()->json([
            'status' => true,
            'data' => $creditCard,
        ], Response::HTTP_CREATED);
    }

    /**
     * Update the user's credit card.
     *
     * @param \App\Http\Requests\Account\CreditCard\UpdateCreditCardRequest $request
     * @param \App\Models\CreditCard $creditCard
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateCreditCardRequest $request, CreditCard $creditCard)
    {
        $creditCard->update($request->validated());

        return response()->json([
            'status' => true,
            'data' =>  'Credit card has been updated!',
        ]);
    }

    /**
     * Delete the user's credit card.
     *
     * @param \App\Http\Requests\Account\CreditCard\DeleteCreditCardRequest $request
     * @param \App\Models\CreditCard $creditCard
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(DeleteCreditCardRequest $request, CreditCard $creditCard)
    {
        $creditCard->delete();

        return response()->json([
            'status' => true,
            'data' =>  'Credit card has been deleted!',
        ]);
    }
}
