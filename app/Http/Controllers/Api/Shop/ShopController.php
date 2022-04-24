<?php

namespace App\Http\Controllers\Api\Shop;

use App\Http\Controllers\Controller;
use App\Http\Requests\Shop\CreateShopRequest;
use App\Http\Requests\Shop\UpdateShopRequest;
use App\Models\Shop\Shop;
use App\Services\ShopService;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class ShopController extends Controller
{
    private ShopService $shopService;

    public function __construct(ShopService $shopService)
    {
        $this->shopService = $shopService;

        $this->middleware('auth:sanctum')->except('get');
    }

    /**
     * Get the shop by id.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function get($id)
    {
        $shop = Shop::find($id)->with(['statistic', 'media'])->get();

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
    public function getMyShop()
    {
        $shop = auth()->user()->shop?->with(['statistic', 'media'])->get();

        return response()->json([
            'status' => true,
            'data' => $shop,
        ]);
    }

    /**
     * Create a shop.
     *
     * @param \App\Http\Requests\Shop\CreateShopRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateShopRequest $request)
    {
        if (!is_null(auth()->user()->shop)) {
            throw new BadRequestHttpException('Shop already created!');
        }

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
        if (is_null(auth()->user()->shop)) {
            throw new BadRequestHttpException('Create your shop first!');
        }

        $this->shopService->update(
            auth()->user()->id,
            $request->validated(),
        );

        return response()->json([
            'status' => true,
            'message' => 'Shop has been updated!',
        ]);
    }
}
