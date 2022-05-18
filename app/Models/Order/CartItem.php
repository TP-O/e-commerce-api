<?php

namespace App\Models\Order;

use App\Models\Product\Product;
use App\Models\Product\ProductModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_model_id',
        'quantity',
    ];

    public $timestamps = false;

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function productModel()
    {
        return $this->belongsTo(ProductModel::class);
    }
}
