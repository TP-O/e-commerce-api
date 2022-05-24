<?php

namespace App\Models\Order;

use App\Models\Product\Product;
use App\Models\Product\ProductModel;
use App\Models\Shop\Shop;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;

    protected $primaryKey = null;

    public $incrementing = false;

    protected $fillable = [
        'user_id',
        'product_model_id',
        'quantity',
    ];

    public $timestamps = false;

    public function shop()
    {
        return $this->belongsTo(Shop::class)
            ->select(['id' ,'name']);
    }

    public function product()
    {
        return $this->belongsTo(Product::class)
            ->with('models');
    }

    public function productModel()
    {
        return $this->belongsTo(ProductModel::class);
    }
}
