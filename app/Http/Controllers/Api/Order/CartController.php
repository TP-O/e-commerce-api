<?php

namespace App\Http\Controllers\Api\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\Order\AddToCartRequest;
use App\Http\Requests\Order\GetCartRequest;
use App\Models\Order\CartItem;
use App\Services\CartService;
use Illuminate\Http\Request;

class CartController extends Controller
{
    private CartService $cartService;

    public function __construct(CartService $cartService)
    {
        $this->cartService = $cartService;

        $this->middleware('auth:sanctum');
    }

    /**
     * Get all items in cart of the current users.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function get()
    {
        $cart = $this->cartService->getItems(
            request()->user()->id,
        );

        return response()->json([
            'status' => true,
            'data' => $cart,
        ]);
    }

    /**
     * Add item to cart of the current user.
     *
     * @param \App\Http\Requests\Order\AddToCartRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function add(AddToCartRequest $request)
    {
        $newPirce = $this->cartService->addItem(
            $request->user()->id,
            $request->validated(),
        );

        return response()->json([
            'status' => true,
            'message' => 'Cart has been updated!',
            'data' => $newPirce,
        ]);
    }

    /**
     * Delete item from cart of the current user.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $productModelId
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(Request $request, int $productModelId)
    {
        CartItem::where([
            ['user_id', $request->user()->id],
            ['product_model_id', $productModelId],
        ])
            ->delete();

        return response()->json([
            'status' => true,
            'message' => 'Cart has been updated!',
        ]);
    }
}
