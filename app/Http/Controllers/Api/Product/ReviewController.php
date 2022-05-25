<?php

namespace App\Http\Controllers\Api\Product;

use App\Enums\OrderStatus;
use App\Enums\Pagination;
use App\Http\Controllers\Controller;
use App\Http\Requests\Product\Review\CreateReviewRequest;
use App\Http\Requests\Product\Review\GetReviewRequest;
use App\Http\Requests\Product\Review\ReplyReviewRequest;
use App\Models\Order\Order;
use App\Models\Product\Review;
use App\Services\ProductReviewService;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class ReviewController extends Controller
{
    private ProductReviewService $productReviewService;

    public function __construct(ProductReviewService $productReviewService)
    {
        $this->productReviewService = $productReviewService;

        $this->middleware('auth:sanctum')->except('belongToProduct');
    }

    /**
     * Get reviews of the product.
     *
     * @param \App\Http\Requests\Product\Review\GetReviewRequest $request
     * @param int $productId
     * @return \Illuminate\Http\JsonResponse
     */
    public function belongToProduct(GetReviewRequest $request, int $productId)
    {
        $reviews = Review::where('product_id', $productId)
            ->paginate($request->input('limit') ?? Pagination::Default);

        return response()->json([
            'status' => true,
            'data' => $reviews,
        ]);
    }

    /**
     * Get reviews of the current shop.
     *
     * @param \App\Http\Requests\Product\Review\GetReviewRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function belongToShop(GetReviewRequest $request)
    {
        $reviews = Review::where('shop_id', $request->user()->id)
            ->paginate($request->input('limit') ?? Pagination::Default);

        return response()->json([
            'status' => true,
            'data' => $reviews,
        ]);
    }

    /**
     * Create review for the product.
     *
     * @param \App\Http\Requests\Product\Review\CreateReviewRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateReviewRequest $request)
    {
        $this->productReviewService->create(
            $request->user()->id,
            $request->validated(),
        );

        return response()->json([
            'status' => true,
            'message' => 'Review has been created!',
        ]);
    }

    /**
     * Reply user's review.
     *
     * @param \App\Http\Requests\Product\Review\ReplyReviewRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function reply(ReplyReviewRequest $request, Review $review)
    {
        $review->update([
            'reply' => $request->input('reply'),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Review has been replied!',
        ]);
    }
}
