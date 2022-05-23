<?php

namespace App\Models\Shop;

use App\Enums\ProductStatus;
use App\Models\Product\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'slug',
        'name',
        'description',
        'avatar_image',
        'cover_image',
        'banners',
    ];

    protected $casts = [
        'banners' => 'array',
        'created_at' => 'datetime',
    ];

    public $timestamps = false;

    public function statistic()
    {
        return $this->hasOne(Statistic::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class)
            ->where('status_id', '<>', ProductStatus::Deleted)
            ->with('models');
    }

    public function publishedProducts()
    {
        return $this->hasMany(Product::class)
            ->where('status_id', ProductStatus::Published)
            ->with('models');
    }
}
