<?php

namespace App\Http\Controllers\Api\Product;

use App\Enums\Pagination;
use App\Enums\ProductStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\Product\CreateProductRequest;
use App\Http\Requests\Product\DeleteProductRequest;
use App\Http\Requests\Product\GetProductRequest;
use App\Http\Requests\Product\SearchProductRequest;
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
            'feature',
            'search',
            'publishedBelongToShop',
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
            ['status_id', ProductStatus::Published->value],
        ])
            ->with([
                'attributes',
                'models',
                'wholesalePrices',
                'shop',
            ])
            ->firstOrFail();

        return response()->json([
            'status' => true,
            'data' => $product,
        ]);
    }

    /**
     * Get featured products.
     *
     * @param \App\Http\Requests\Product\GetProductRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function feature(GetProductRequest $request)
    {
        $featuredProducts = Product::with('models')
            ->paginate($request->input('limit') ?? Pagination::Default);

        return response()->json([
            'status' => true,
            'data' => $featuredProducts,
        ]);
    }

    /**
     * Search the products by text.
     *
     * @param \App\Http\Requests\Product\SearchProductRequest
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(SearchProductRequest $request)
    {
        $products = $this->productService->search(
            $request->validated(),
        );

        return response()->json([
            'status' => true,
            'data' => $products,
        ]);
    }

    /**
     * Get published products of the shop.
     *
     * @param \App\Http\Requests\Product\GetProductRequest $request
     * @param int $shopId
     * @return \Illuminate\Http\JsonResponse
     */
    public function publishedBelongToShop(GetProductRequest $request, int $shopId)
    {
        $publishedProducts = Product::where([
            ['shop_id', $shopId],
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
     * Get products of the current shop.
     *
     * @param \App\Http\Requests\Product\GetProductRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function belongToShop(GetProductRequest $request)
    {
        $products = Product::where([
            ['shop_id', request()->user()->id],
            ['status_id', '<>', ProductStatus::Deleted],
        ])
            ->paginate($request->input('limit') ?? Pagination::Default);

        return response()->json([
            'status' => true,
            'data' => $products,
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
}
