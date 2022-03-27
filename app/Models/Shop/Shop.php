<?php

namespace App\Models\Shop;

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
        'cover_image'
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];

    public $timestamps = false;

    public function statistic()
    {
        return $this->hasOne(Statistic::class);
    }

    public function banners()
    {
        return $this->hasMany(Banner::class);
    }
}
