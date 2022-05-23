<?php

namespace App\Http\Controllers\Api\Shop;

use App\Http\Controllers\Controller;
use App\Http\Requests\Shop\CreateShopRequest;
use App\Http\Requests\Shop\UpdateShopRequest;
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
     * Get the owned shop.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function myShop()
    {
        $shop = request()->user()->shop;

        return response()->json([
            'status' => true,
            'data' => $shop,
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
        $this->shopService->create(
            auth()->user()->id,
            $request->validated(),
        );

        return response()->json([
            'status' => true,
            'message' => 'Shop has been created!',
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
