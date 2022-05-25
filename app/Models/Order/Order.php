<?php

namespace App\Models\Order;

use App\Models\Address;
use App\Models\Product\Product;
use App\Models\Product\Review;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'shop_id',
        'product_id',
        'product_model_id',
        'received_address_id',
        'pickup_address_id',
        'name',
        'quantity',
        'total',
        'grand_total',
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

    public function receivedAddress()
    {
        return $this->belongsTo(Address::class, 'received_address_id');
    }

    public function pickupAddress()
    {
        return $this->belongsTo(Address::class, 'pickup_address_id');
    }

    public function progresses()
    {
        return $this->hasMany(Progress::class);
    }

    public function review()
    {
        return $this->hasOne(Review::class);
    }
}
