<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\Category\Attribute\CreateAttributeRequest;
use App\Http\Requests\Product\Category\Attribute\UpdateAttributeRequest;
use App\Models\Product\CategoryAttribute;
use Illuminate\Http\Response;

class AttributeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Search attributes by name.
     *
     * @param string $input
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(string $input)
    {
        $attributes = CategoryAttribute::where('name', 'like', "%$input%")->get();

        return response()->json([
            'status' => true,
            'data' => $attributes,
        ]);
    }

    /**
     * Create the attribute.
     *
     * @param \App\Http\Requests\Product\Category\Attribute\CreateAttributeRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateAttributeRequest $request)
    {
        $attribute = CategoryAttribute::create(
            $request->safe()->only([
                'name',
                'units',
            ]),
        );

        if ($request->exists('category_id')) {
            $attribute->categories()->attach(
                $request->input('category_id'),
                ['is_required' => $request->input('is_required')],
            );
        }

        return response()->json([
            'status' => true,
            'message' => 'Category attribute has been created!',
        ], Response::HTTP_CREATED);
    }

    /**
     * Update the attribute.
     *
     * @param \App\Http\Requests\Product\Category\Attribute\UpdateAttributeRequest $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateAttributeRequest $request, int $id)
    {
        CategoryAttribute::findOrFail($id)->update($request->validated());

        return response()->json([
            'status' => true,
            'message' => 'Category attribute has been updated!',
        ]);
    }

    /**
     * Delete the attribute.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(int $id)
    {
        CategoryAttribute::findOrFail($id)->delete();

        return response()->json([
            'status' => true,
            'message' => 'Category attribute has been deleted!',
        ]);
    }
}
