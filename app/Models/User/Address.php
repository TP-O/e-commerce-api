<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $table = 'user_addresses';

    protected $fillable = [
        'user_id',
        'type_id',
        'full_name',
        'phone',
        'city',
        'province',
        'ward',
        'detail',
        'reminder',
        'is_home',
    ];

    public $timestamps = false;
}
