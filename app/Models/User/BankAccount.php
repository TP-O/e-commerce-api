<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankAccount extends Model
{
    use HasFactory;

    protected $table = 'user_bank_accounts';

    protected $fillable = [
        'user_id',
        'owner_name',
        'identification_number',
        'bank_name',
        'bank_branch',
        'account_number',
    ];

    public $timestamps = false;
}
