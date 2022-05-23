<?php

namespace App\Http\Controllers\Api\Shop;

use App\Enums\Pagination;
use App\Enums\ProductStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\Product\GetProductRequest;
use App\Http\Requests\Shop\CreateShopRequest;
use App\Http\Requests\Shop\UpdateShopRequest;
use App\Models\Product\Product;
use App\Models\Shop\Shop;
use App\Services\ShopService;
use Illuminate\Http\Response;

class ShopController extends Controller
{
    private ShopService $shopService;

    public function __construct(ShopService $shopService)
    {
        $this->shopService = $shopService;

        $this->middleware('auth:sanctum')->except([
            'get',
            'publishedProducts',
        ]);
    }

    /**
     * Get the shop by id or slug.
     *
     * @param int|string $idOrSlug
     * @return \Illuminate\Http\JsonResponse
     */
    public function get($idOrSlug)
    {
        $shop = Shop::where('id', (int) $idOrSlug)
            ->orWhere('slug', $idOrSlug)
            ->with('statistic')
            ->firstOrFail();

        unset($shop->statistic->all_product_count);

        return response()->json([
            'status' => true,
            'data' => $shop,
        ]);
    }

    /**
     * Get published products of the shop.
     *
     * @param \App\Http\Requests\Product\GetProductRequest $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function publishedProducts(GetProductRequest $request, int $id)
    {
        $publishedProducts = Product::where([
            ['shop_id', $id],
            ['status_id', ProductStatus::Published],
        ])
            ->with('models')
            ->paginate($request->input('limit') ?? Pagination::Default);

        return response()->json([
            'status' => true,
            'data' => $publishedProducts,
        ]);
    }

    /**
     * Get the owned shop.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function mine()
    {
        $shop = request()->user()->shop;

        return response()->json([
            'status' => true,
            'data' => $shop,
        ]);
    }

    /**
     * Get products of the current shop.
     *
     * @param \App\Http\Requests\Product\GetProductRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function products(GetProductRequest $request)
    {
        $products = Product::where('shop_id', request()->user()->id)
            ->paginate($request->input('limit') ?? Pagination::Default);

        return response()->json([
            'status' => true,
            'data' => $products,
        ]);
    }

    /**
     * Create the shop.
     *
     * @param \App\Http\Requests\Shop\CreateShopRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateShopRequest $request)
    {
        $shop = $this->shopService->create(
            auth()->user()->id,
            $request->validated(),
        );

        return response()->json([
            'status' => true,
            'message' => 'Shop has been created!',
            'data' => $shop,
        ], Response::HTTP_CREATED);
    }

    /**
     * Update the shop.
     *
     * @param \App\Http\Requests\Shop\UpdateShopRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateShopRequest $request)
    {
        $this->shopService->update(
            $request->user()->id,
            $request->validated(),
        );

        return response()->json([
            'status' => true,
            'message' => 'Shop has been updated!',
        ]);
    }
}
