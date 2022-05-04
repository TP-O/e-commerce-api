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
     * Create, update, or delete attributes.
     *
     * @param array $attributeChanges
     * @return void
     */
    public function manage($attributeChanges)
    {
        if (isset($attributeChanges['create'])) {
            CategoryAttribute::insert($attributeChanges['create']);
        }

        if (isset($attributeChanges['update'])) {
            $this->queryService->updateMultipleRecords(
                'product_category_attributes',
                $attributeChanges['update'],
            );
        }

        if (isset($attributeChanges['delete'])) {
            CategoryAttribute::destroy(array_map(function($val) {
                return $val['id'];
            }, $attributeChanges['delete']));
        }

        return;
    }
}
