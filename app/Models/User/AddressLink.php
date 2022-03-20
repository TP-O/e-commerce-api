<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class AddressLink extends Pivot
{
    use HasFactory;

    protected $table = 'user_address_links';

    protected $fillable = [
        'address_id',
        'user_id',
        'type_id',
    ];

    public $timestamps = false;
}
