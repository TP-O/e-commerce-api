<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\Category\BindCategoryAttributeRequest;
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
            'children',
            'attributes',
        ]);
    }

    /**
     * Get children of the category.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function children(int $id)
    {
        $children = $this->productCategoryService->getChildren($id);

        return response()->json([
            'status' => true,
            'data' => $children,
        ]);
    }

    /**
     * Get all attributes of the category.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function attributes(int $id)
    {
        $attributes = Category::find($id)->attributes;

        return response()->json([
            'status' => true,
            'data' => $attributes,
        ]);
    }

    /**
     * Bind the attributes with the specific category.
     *
     * @param \App\Http\Requests\Product\Category\BindCategoryAttributeRequest $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function bind(BindCategoryAttributeRequest $request, int $id)
    {
        Category::findOrFail($id)->attributes()->sync($request->input('binds'));

        return response()->json([
            'status' => true,
            'message' => 'Attributes have been binded!',
        ], Response::HTTP_CREATED);
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
