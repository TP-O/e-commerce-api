<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddressType extends Model
{
    use HasFactory;

    protected $table = 'user_address_types';

    protected $hidden = [
        'id',
        'pivot',
    ];
}
