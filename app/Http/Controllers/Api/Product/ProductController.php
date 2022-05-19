<?php

namespace App\Http\Controllers\Api\Product;

use App\Enums\ProductStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\Product\CreateProductRequest;
use App\Http\Requests\Product\DeleteProductRequest;
use App\Http\Requests\Product\GetProductPriceRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Models\Product\Product;
use App\Services\ProductService;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class ProductController extends Controller
{
    private ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;

        $this->middleware('auth:sanctum')->except([
            'get',
            'search',
            'prices',
        ]);
    }

    /**
     * Get the product by id.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function get(int $id)
    {
        $product = Product::where([
                ['id', $id],
                ['status_id', '<>', ProductStatus::Delisted->value],
                ['status_id', '<>', ProductStatus::Deleted->value],
            ])
            ->with([
                'attributes',
                'models',
                'wholesalePrices',
            ])
            ->firstOrFail();

        return response()->json([
            'status' => true,
            'data' => $product,
        ]);
    }

    /**
     * Create the product.
     *
     * @param \App\Http\Requests\Product\CreateProductRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateProductRequest $request)
    {
        $this->productService->create(
            $request->validated(),
        );

        return response()->json([
            'status' => true,
            'message' => 'Product has been created!',
        ], Response::HTTP_CREATED);
    }

    /**
     * Update the product.
     *
     * @param \App\Http\Requests\Product\UpdateProductRequest $request
     * @param \App\Models\Product\Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $this->productService->update(
            $product->id,
            $request->validated(),
        );

        return response()->json([
            'status' => true,
            'message' => 'Product has been updated!',
        ]);
    }

    /**
     * Delete the product.
     *
     * @param \App\Http\Requests\Product\DeleteProductRequest $request
     * @param \App\Models\Product\Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(DeleteProductRequest $request, Product $product)
    {
        $product->update([
            'status_id' => ProductStatus::Deleted,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Product has been deleted!',
        ]);
    }

    /**
     * Recovery the product.
     *
     * @param \App\Models\Product\Product $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function recovery(Product $product)
    {
        if ($product->status_id !== ProductStatus::Deleted->value) {
            throw new BadRequestHttpException('Product has not been deleted yet!');
        }

        $product->update([
            'status_id' => ProductStatus::Delisted,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Product has been recoveried!',
        ]);
    }

    /**
     * Get prices of the product models.
     *
     * @param \App\Http\Requests\Product\GetProductPriceRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function prices(GetProductPriceRequest $request)
    {
        $getProductQuery = $request->validated();

        $prices = $this->productService->getPrices($getProductQuery['products']);

        return response()->json([
            'status' => true,
            'data' => $prices,
        ]);
    }
}
