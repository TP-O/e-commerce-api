<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'product_categories';

    protected $fillable = [
        'parent_id',
        'name',
        'cover_image',
    ];

    public $timestamps = false;

    public function attributes()
    {
        return $this->belongsToMany(
            CategoryAttribute::class,
            'product_category_product_category_attribute',
            'category_id',
            'attribute_id',
        )
            ->select(
                'product_category_attributes.*',
                'product_category_product_category_attribute.is_required as is_required',
            )
            ->distinct('product_category_attributes.id');
    }

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id')
            ->with('children');
    }
}
