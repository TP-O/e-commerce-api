<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankAccount extends Model
{
    use HasFactory;

    protected $fillable = [
        'bank_accountable_id',
        'bank_accountable_type',
        'accountholder_name',
        'identification_number',
        'bank_name',
        'bank_branch',
        'account_number',
    ];

    protected $hidden = [
        'bank_accountable_id',
        'bank_accountable_type',
    ];

    public $timestamps = false;
}
