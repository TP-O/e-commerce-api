<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Progress extends Model
{
    use HasFactory;

    protected $table = 'order_status';

    protected $fillable = [
        'order_id',
        'status_id',
        'note',
    ];

    public $timestamps = false;
}
