<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CreditCard extends Model
{
    use HasFactory;

    protected $fillable = [
        'credit_cardable_id',
        'credit_cardable_type',
        'cardholder_name',
        'card_number',
        'expiry_date',
        'cvv',
        'registration_address',
        'postal_code',
    ];

    protected $hidden = [
        'credit_cardable_id',
        'credit_cardable_type',
    ];

    public $timestamps = false;
}
