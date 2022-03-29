<?php

namespace App\Models\Shop;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use HasFactory;

    protected $table = 'shop_banners';

    protected $fillable = [
        'shop_id',
        'source',
    ];

    protected $hidden = [
        'shop_id',
    ];
}
