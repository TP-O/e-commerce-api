<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\Category\BindCategoryAttributeRequest;
use App\Http\Requests\Product\Category\GetProductCategoryAttributeRequest;
use App\Http\Requests\Product\Category\ManageProductCategoryRequest;
use App\Models\Product\Category;
use App\Services\ProductCategoryService;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    private ProductCategoryService $productCategoryService;

    public function __construct(ProductCategoryService $productCategoryService)
    {
        $this->productCategoryService = $productCategoryService;

        $this->middleware('auth:sanctum')->except([
            'tree',
        ]);
    }

    /**
     * Get category tree.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function tree()
    {
        $categoryTree = Category::whereNull('parent_id')
            ->with('children')
            ->get();

        return response()->json([
            'status' => true,
            'data' => $categoryTree,
        ]);
    }

    /**
     * Get all attributes of the categories.
     *
     * @param \App\Http\Requests\Product\Category\GetProductCategoryAttributeRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function attributes(GetProductCategoryAttributeRequest $request)
    {
        $attributes = $this->productCategoryService->getAttributes(
            $request->input('category_ids'),
        );

        return response()->json([
            'status' => true,
            'data' => $attributes,
        ]);
    }

    /**
     * Bind the attributes with the specific category.
     *
     * @param \App\Http\Requests\Product\Category\BindCategoryAttributeRequest $request
     * @param \App\Models\Product\Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function bindAttributes(BindCategoryAttributeRequest $request, Category $category)
    {
        $category->attributes()->sync(
            collect($request->input('binds'))->keyBy('attribute_id'),
        );

        return response()->json([
            'status' => true,
            'message' => 'Attributes have been binded!',
        ]);
    }

    /**
     * Manage the categories.
     *
     * @param \App\Http\Requests\Product\Category\ManageProductCategoryRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function manage(ManageProductCategoryRequest $request)
    {
        $this->productCategoryService->manage($request->validated());

        return response()->json([
            'status' => true,
            'message' => 'Categories are updated!',
        ], Response::HTTP_CREATED);
    }
}
