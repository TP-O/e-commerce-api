<?php

namespace App\Models\Shop;

use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    protected $table = 'shop_statistics';

    protected $hidden = [
        'shop_id',
    ];
}
