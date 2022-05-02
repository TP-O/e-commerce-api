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

    /**
     * Get children of the category.
     *
     * @param int $id
     * @return array
     */
    public function getChildren($id)
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

    /**
     * Get all attributes of the categories.
     *
     * @param array $ids
     * @return array
     */
    public function getAttributes($ids)
    {
        $attributes = [];
        $categoriesWithAttributes = Category::whereIn('id', $ids)
            ->with('attributes')
            ->get()
            ;

        foreach ($categoriesWithAttributes as $categoryWithAttributes) {
            array_push($attributes, ...$categoryWithAttributes->attributes);
        }

        return $attributes;
    }

    /**
     * Create, update, or delete categories.
     *
     * @param array $categoryChanges
     * @return void
     */
    public function manage($categoryChanges)
    {
        if (isset($categoryChanges['create'])) {
            Category::insert($categoryChanges['create']);
        }

        if (isset($categoryChanges['update'])) {
            $this->queryService->updateMultipleRecords(
                'product_categories',
                $categoryChanges['update'],
            );
        }

        if (isset($categoryChanges['delete'])) {
            Category::destroy(array_map(function($val) {
                return $val['id'];
            }, $categoryChanges['delete']));
        }

        return;
    }
}
