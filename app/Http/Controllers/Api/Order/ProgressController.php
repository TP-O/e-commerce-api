<?php

namespace App\Http\Controllers\Api\Order;

use App\Enums\OrderStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\Order\Progress\CancelOrderRequest;
use App\Http\Requests\Order\Progress\ReadyOrderRequest;
use App\Models\Order\Order;

class ProgressController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Mark the order as ready.
     *
     * @param \App\Http\Requests\Order\Progress\ReadyOrderRequest $request
     * @param \App\Models\Order\Order $order
     * @return \Illuminate\Http\JsonResponse
     */
    public function ready(ReadyOrderRequest $request, Order $order)
    {
        $order->update([
            'pickup_address_id' => $request->input('pickup_address_id'),
        ]);

        $order->progresses()->create([
            'status_id' => OrderStatus::Ready,
            'note' => $request->input('note') ?? '',
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Order progress has been updated!',
        ]);
    }

    /**
     * Mark the order as cancelled.
     *
     * @param \App\Http\Requests\Order\Progress\CancelOrderRequest $request
     * @param \App\Models\Order\Order $order
     * @return \Illuminate\Http\JsonResponse
     */
    public function cancel(CancelOrderRequest $request, Order $order)
    {
        $order->progresses()->create([
            'status_id' => OrderStatus::Cancelled,
            'note' => $request->input('note') ?? '',
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Order progress has been updated!',
        ]);
    }
}
