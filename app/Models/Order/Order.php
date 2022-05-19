<?php

namespace App\Models\Order;

use App\Models\Address;
use App\Models\Product\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_id',
        'product_model_id',
        'address_id',
        'status_id',
        'name',
        'quantity',
        'total',
        'variations',
    ];

    protected $casts = [
        'variations' => 'array',
    ];

    public $timestamps = false;

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }
}
