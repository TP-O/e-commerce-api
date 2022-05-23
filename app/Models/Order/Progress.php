<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Progress extends Model
{
    use HasFactory;

    protected $table = 'order_progresses';

    protected $fillable = [
        'order_id',
        'status_id',
        'note',
    ];

    protected $hidden = [
        'id',
        'order_id',
    ];

    public $timestamps = false;
}
