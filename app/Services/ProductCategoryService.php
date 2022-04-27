<?php

namespace App\Services;

use App\Models\Product\Category;

class ProductCategoryService
{
    private QueryService $queryService;

    public function __construct(QueryService $queryService)
    {
        $this->queryService = $queryService;
    }

    public function getChildren(int $id)
    {
        $category = $id == 0
            ? $id = null
            : Category::findOrFail($id);
        $children = Category::where('parent_id', $id)->get();

        return [
            'parent' => $category,
            'children' => $children,
        ];
    }

    public function manage(array $changes)
    {
        if (!is_null($changes['create'])) {
            Category::insert($changes['create']);
        }

        if (!is_null($changes['update'])) {
            $this->queryService->updateMultipleRecords(
                'product_categories',
                $changes['update'],
            );
        }

        if (!is_null($changes['delete'])) {
            Category::destroy(array_map(function($val) {
                return $val['id'];
            }, $changes['delete']));
        }

        return;
    }
}
