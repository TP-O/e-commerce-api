<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\Category\BindCategoryAttributeRequest;
use App\Http\Requests\Product\Category\ManageProductCategoryRequest;
use App\Models\Product\Category;
use App\Services\QueryService;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    private QueryService $queryService;

    public function __construct(QueryService $queryService)
    {
        $this->queryService = $queryService;

        $this->middleware('auth:sanctum')->except([
            'children',
            'attributes',
        ]);
    }

    public function children(int $id)
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

    public function attributes(int $id)
    {
        return response()->json([
            'status' => true,
            'data' => Category::find($id)->attributes,
        ]);
    }

    public function bind(BindCategoryAttributeRequest $request, int $id)
    {
        Category::findOrFail($id)->attributes()->sync($request->input('binds'));

        return response()->json([
            'status' => true,
            'message' => 'Attributes have been binded!',
        ], Response::HTTP_CREATED);
    }

    public function manage(ManageProductCategoryRequest $request)
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
}
