<?php

namespace App\Http\Controllers\Api\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\Order\AddToCartRequest;
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

    public function get(Request $request)
    {
        $cart = $request->user()->cart;

        return response()->json([
            'status' => true,
            'data' => $cart,
        ]);
    }

    public function add(AddToCartRequest $request)
    {
        $this->cartService->addItem(
            $request->user()->id,
            $request->validated(),
        );

        return response()->json([
            'status' => true,
            'message' => 'Cart has been updated!',
        ]);
    }

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
