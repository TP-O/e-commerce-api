<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\Category\ManageProductCategoryAttributeRequest;
use App\Models\Product\CategoryAttribute;
use App\Services\QueryService;
use Illuminate\Http\Response;

class AttributeController extends Controller
{
    private QueryService $queryService;

    public function __construct(QueryService $queryService)
    {
        $this->queryService = $queryService;

        $this->middleware('auth:sanctum')->except('search');
    }

    public function search(string $input)
    {
        return response()->json([
            'status' => true,
            'data' => CategoryAttribute::where('name', 'like', "%$input%")->get(),
        ]);
    }

    public function manage(ManageProductCategoryAttributeRequest $request)
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
}
