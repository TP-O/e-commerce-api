<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\Category\ManageProductCategoryAttributeRequest;
use App\Services\CategoryAttributeService;
use Illuminate\Http\Response;

class AttributeController extends Controller
{
    private CategoryAttributeService $categoryAttributeService;

    public function __construct(CategoryAttributeService $categoryAttributeService)
    {
        $this->categoryAttributeService = $categoryAttributeService;

        $this->middleware('auth:sanctum')->except('search');
    }

    /**
     * Search attributes by name.
     *
     * @param string $input
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(string $input)
    {
        $attributes = $this->categoryAttributeService->search($input);

        return response()->json([
            'status' => true,
            'data' => $attributes,
        ]);
    }

    /**
     * Manage the attributes.
     *
     * @param \App\Http\Requests\Product\Category\ManageProductCategoryAttributeRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function manage(ManageProductCategoryAttributeRequest $request)
    {
        $this->categoryAttributeService->manage($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Category attributes are updated!',
        ], Response::HTTP_CREATED);
    }
}
