<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CategoryCategoryAttribute extends Pivot
{
    use HasFactory;

    protected $table = 'product_category_product_category_attribute';

    protected $fillable = [
        'category_id',
        'attribute_id',
        'is_required',
    ];

    public $timestamps = false;
}
