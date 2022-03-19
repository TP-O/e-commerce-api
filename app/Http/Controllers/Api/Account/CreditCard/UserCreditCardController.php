<?php

namespace App\Http\Controllers\Api\Account\CreditCard;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserCreditCardRequest;
use App\Http\Requests\UpdateUserCreditCardRequest;
use App\Models\User\CreditCard;

class UserCreditCardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Get all credit cards of an user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        $creditCards = CreditCard::where('user_id', auth()->user()->id)->get();

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
        $creditCard = CreditCard::insert([
            ...$request->validated(),
            'user_id' => auth()->user()->id,
        ]);

        return response()->json([
            'status' => true,
            'data' => $creditCard,
        ]);
    }

    /**
     * Update the user's credit card.
     *
     * @param \App\Http\Requests\UpdateUserCreditCardRequest $request
     * @param \App\Models\User\CreditCard $creditCard
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateUserCreditCardRequest $request, CreditCard $creditCard)
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
     * @param \App\Models\User\CreditCard $creditCard
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(CreditCard $creditCard)
    {
        $creditCard->delete();

        return response()->json([
            'status' => true,
            'data' =>  'Credit card has been deleted!',
        ]);
    }
}
