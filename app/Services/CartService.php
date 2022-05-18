<?php

namespace App\Services;

use App\Models\Order\CartItem;

class CartService
{
    public function addItem($userId, $cartItemData)
    {
        $cartItem = CartItem::where([
            ['user_id', $userId],
            ['product_model_id', $cartItemData['product_model_id']],
        ])
            ->get();

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

        return;
    }
}
