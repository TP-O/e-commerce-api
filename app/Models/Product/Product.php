<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'shop_id',
        'brand_id',
        'status_id',
        'name',
        'description',
        'weight',
        'images',
        'videos',
        'variations',
    ];

    protected $casts = [
        'images' => 'array',
        'videos' => 'array',
        'variations' => 'array',
    ];

    public $timestamps = false;
}
