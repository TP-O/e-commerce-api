<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\CreateProductRequest;
use App\Http\Requests\Product\DeleteProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Models\Product\Product;
use App\Services\ProductService;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    private ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;

        $this->middleware('auth:sanctum')->except([
            'get',
            'search',
        ]);
    }

    public function get(int $id)
    {
        $product = Product::with(
            [
                'attributes',
                'models',
                'wholesalePrices',
            ],
        )->findOrFail($id);

        return response()->json([
            'status' => true,
            'data' => $product,
        ]);
    }

    public function create(CreateProductRequest $request)
    {
        $productIds = $this->productService->createMany(
            $request->input('products'),
        );

        return response()->json([
            'status' => true,
            'message' => 'Products have been created!',
            'data' => [
                'ids' => $productIds,
            ],
        ], Response::HTTP_CREATED);
    }

    public function update(UpdateProductRequest $request)
    {
        $this->productService->updateMany(
            $request->input('products'),
        );

        return response()->json([
            'status' => true,
            'message' => 'Products have been updated!',
        ]);
    }

    public function delete(DeleteProductRequest $request)
    {
        Product::where('shop_id', $request->user()->id)
            ->whereIn('id', $request->input('ids'))
            ->delete();

        return response()->json([
            'status' => true,
            'message' => 'Products have been deleted!',
        ]);
    }
}
