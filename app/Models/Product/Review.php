<?php

namespace App\Models\Product;

use App\Models\Account\User\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $table = 'product_reviews';

    protected $fillable = [
        'user_id',
        'product_id',
        'shop_id',
        'rating',
        'comment',
        'reply',
        'variations',
    ];

    protected $casts = [
        'variations' => 'array',
    ];

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
