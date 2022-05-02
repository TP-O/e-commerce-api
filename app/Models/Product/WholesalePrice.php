<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WholesalePrice extends Model
{
    use HasFactory;

    protected $table = 'product_wholesale_prices';

    protected $fillable = [
        'product_id',
        'min',
        'max',
        'price',
    ];

    protected $hidden = [
        'id',
        'product_id',
    ];

    public $timestamps = false;
}
