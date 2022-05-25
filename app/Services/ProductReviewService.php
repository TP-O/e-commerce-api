<?php

namespace App\Services;

use App\Enums\OrderStatus;
use App\Models\Order\Order;
use App\Models\Product\Review;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class ProductReviewService
{
    /**
     * Create the review.
     *
     * @param int $userId
     * @param array $reviewData
     * @return void
     */
    public function create(int $userId, array $reviewData)
    {
        $order = Order::where('id', $reviewData['order_id'])
            ->with('review')
            ->first();

        if (
            $order?->user_id !== $userId ||
            $order?->status_id !== OrderStatus::Delivered->value ||
            !is_null($order?->review)
        ) {
            throw new BadRequestHttpException('Unable to create review!');
        }

        Review::create([
            'user_id' =>$userId,
            ...$reviewData,
            'product_id' => $order->product_id,
            'shop_id' => $order->shop_id,
            'variations' => $order->variations,
        ]);

        return;
    }
}
