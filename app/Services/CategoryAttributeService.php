<?php

namespace App\Services;

use App\Models\Product\CategoryAttribute;

class CategoryAttributeService
{
    private QueryService $queryService;

    public function __construct(QueryService $queryService)
    {
        $this->queryService = $queryService;
    }

    /**
     * Search attributes by name
     *
     * @param string $input
     * @return Illuminate\Support\Collection<CategoryAttribute>
     */
    public function search(string $input)
    {
        return CategoryAttribute::where('name', 'like', "%$input%")->get();
    }

    /**
     * Create, update, or delete attributes.
     *
     * @param array $changes
     * @return void
     */
    public function manage(array $changes)
    {
        if (!is_null($changes['create'])) {
            CategoryAttribute::insert($changes['create']);
        }

        if (!is_null($changes['update'])) {
            $this->queryService->updateMultipleRecords(
                'product_category_attributes',
                $changes['update'],
            );
        }

        if (!is_null($changes['delete'])) {
            CategoryAttribute::destroy(array_map(function($val) {
                return $val['id'];
            }, $changes['delete']));
        }

        return;
    }
}
