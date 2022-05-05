<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'shop_id',
        'product_id',
        'product_model_id',
        'quantity',
    ];

    public $timestamps = false;
}
