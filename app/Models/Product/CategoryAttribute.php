<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryAttribute extends Model
{
    use HasFactory;

    protected $table = 'product_category_attributes';

    protected $fillable = [
        'name',
        'units',
    ];

    protected $hidden = [
        'pivot',
    ];

    protected $casts = [
        'units' => 'array'
    ];

    public $timestamps = false;

    public function categories()
    {
        return $this->belongsToMany(
            Category::class,
            'product_category_product_category_attribute',
            'attribute_id',
            'category_id',
        );
    }
}
