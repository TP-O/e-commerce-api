<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $table = 'user_addresses';

    protected $fillable = [
        'full_name',
        'phone',
        'state',
        'city',
        'town',
        'address',
        'is_home',
    ];

    public $timestamps = false;

    public function types()
    {
        return $this->belongsToMany(
            AddressType::class,
            AddressLink::class,
            'address_id',
            'type_id'
        );
    }
}
