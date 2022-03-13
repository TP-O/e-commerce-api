<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CreditCard extends Model
{
    use HasFactory;

    protected $table = 'user_credit_cards';

    protected $fillable = [
        'user_id',
        'cardholder_name',
        'card_number',
        'expiry_date',
        'cvv',
        'registration_address',
        'postal_code',
    ];

    public $timestamps = false;
}
