<?php

namespace App\Services;

use App\Enums\Pagination;
use App\Models\Order\CartItem;

class CartService
{
    private ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    /**
     * Get all items in cart of the user.
     *
     * @param int $userId
     * @return \Illuminate\Support\Collection
     */
    public function getItems(int $userId)
    {
        $cart = CartItem::where('user_id', $userId)
            ->with([
                'shop',
                'product',
                'productModel',
            ])
            ->get();

        $prices = $this->productService->getPrices($cart->toArray());

        $cart->transform(function ($item, $key) use ($prices) {
            $item->total_price = $prices[$key]['total_price'];
            $item->final_total_price = $prices[$key]['final_total_price'];

            return $item;
        });

        return $cart;
    }

    /**
     * Add item to cart of the user.
     *
     * @param int $userId
     * @param array $cartItemData
     * @return void
     */
    public function addItem(int $userId, array $cartItemData)
    {
        $cartItem = CartItem::where([
            ['user_id', $userId],
            ['product_model_id', $cartItemData['product_model_id']],
        ])
            ->first();

        if (is_null($cartItem)) {
            CartItem::create([
                ...$cartItemData,
                'user_id' => $userId,
            ]);
        } else {
            CartItem::where([
                ['user_id', $userId],
                ['product_model_id', $cartItemData['product_model_id']],
            ])
                ->update([
                    'quantity' => $cartItemData['quantity'],
                ]);
        }

        $prices = $this->productService->getPrices([$cartItemData]);

        return $prices[0];
    }
}
