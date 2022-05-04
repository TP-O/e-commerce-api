<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'phone',
        'state',
        'city',
        'town',
        'address',
        'is_home',
    ];

    protected $hidden = [
        'pivot',
    ];

    public $timestamps = false;

    public function types()
    {
        return $this->hasManyThrough(
            AddressType::class,
            Addressable::class,
            'address_id',
            'id',
            'id',
            'type_id',
        );
    }
}
