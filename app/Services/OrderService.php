<?php

namespace App\Services;

use App\Models\Order\Order;
use App\Models\Product\Product;

class OrderService
{
    private ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    /**
     * Create list of orders for the user.
     *
     * @param int $userId
     * @param array $orderData
     * @return void
     */
    public function create(int $userId, array $orderData)
    {
        $prices = $this->productService->getPrices($orderData['orders']);
        $productIds = array_map(function ($price) {
            return $price['product_id'];
        }, $prices);

        $products = Product::whereIn('id', $productIds)
            ->orderByRaw('ARRAY_POSITION(ARRAY[' . join(',', $productIds) . '], id)')
            ->get();

        $orders = $products->map(function ($product, $key) use ($userId, $orderData, $prices) {
            $variations = collect($prices[$key]['variation_index'])
                ->map(function ($index, $innerKey) use ($product) {
                    return $product->variations[$innerKey]['options'][$index];
                });

            return [
                'user_id' => $userId,
                'shop_id' => $product['shop_id'],
                'product_id' => $product['id'],
                'product_model_id' => $orderData['orders'][$key]['product_model_id'],
                'received_address_id' => $orderData['address_id'],
                'name' => $product->name,
                'variations' => $variations,
                'quantity' => $orderData['orders'][$key]['quantity'],
                'total' => $prices[$key]['final_total_price'],
                'grand_total' => $prices[$key]['final_total_price'],
            ];
        });

        Order::insert($orders->toArray());

        return;
    }
}
