<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'sku',
        'price',
        'stock',
        'variation_index',
        'is_default',
    ];

    protected $casts = [
        'variation_index' => 'array',
    ];

    public $timestamps = false;

    public function wholesalePirces()
    {
        return $this->hasMany(WholesalePrice::class, 'product_id', 'product_id');
    }
}
