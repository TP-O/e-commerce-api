<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\Category\BindCategoryAttributeRequest;
use App\Http\Requests\Product\Category\ManageProductCategoryAttributeRequest;
use App\Http\Requests\Product\Category\ManageProductCategoryRequest;
use App\Models\Product\Category;
use App\Models\Product\CategoryAttribute;
use App\Services\QueryService;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    private QueryService $queryService;

    public function __construct(QueryService $queryService)
    {
        $this->queryService = $queryService;

        $this->middleware('auth:sanctum')->except([
            'showChildren',
            'showAttributes',
            'searchAttributes',
        ]);
    }

    public function showChildren(int $id)
    {
        $category = $id == 0
            ? $id = null
            : Category::findOrFail($id);
        $children = Category::where('parent_id', $id)->get();

        return response()->json([
            'status' => true,
            'data' => [
                'parent' => $category,
                'children' => $children,
            ],
        ]);
    }

    public function showAttributes(int $id)
    {
        return response()->json([
            'status' => true,
            'data' => Category::find($id)->attributes,
        ]);
    }

    public function manageAttribute(ManageProductCategoryAttributeRequest $request)
    {
        if (!is_null($request->input('create'))) {
            CategoryAttribute::insert($request->input('create'));
        }

        if (!is_null($request->input('update'))) {
            $this->queryService->updateMultipleRecords(
                'product_category_attributes',
                $request->input('update'),
            );
        }

        if (!is_null($request->input('delete'))) {
            CategoryAttribute::destroy($request->input('delete'));
        }

        return response()->json([
            'status' => true,
            'message' => 'Category attributes are updated!',
        ], Response::HTTP_CREATED);
    }

    public function manageCategory(ManageProductCategoryRequest $request)
    {
        if (!is_null($request->input('create'))) {
            Category::insert($request->input('create'));
        }

        if (!is_null($request->input('update'))) {
            $this->queryService->updateMultipleRecords(
                'product_categories',
                $request->input('update'),
            );
        }

        if (!is_null($request->input('delete'))) {
            Category::destroy(array_map(function($val) {
                return $val['id'];
            }, $request->input('delete')));
        }

        return response()->json([
            'status' => true,
            'message' => 'Categories are updated!',
        ], Response::HTTP_CREATED);
    }

    public function bindAttribute(BindCategoryAttributeRequest $request, int $id)
    {
        Category::findOrFail($id)->attributes()->sync($request->input('binds'));

        return response()->json([
            'status' => true,
            'message' => 'Attributes have been binded!',
        ], Response::HTTP_CREATED);
    }

    public function searchAttributes(string $search)
    {
        return response()->json([
            'status' => true,
            'data' => CategoryAttribute::where('name', 'like', "%$search%")->get(),
        ]);
    }
}
