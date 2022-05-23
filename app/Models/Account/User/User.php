<?php

namespace App\Models\Account\User;

use App\Models\Address;
use App\Models\BankAccount;
use App\Models\CreditCard;
use App\Models\Order\CartItem;
use App\Models\Shop\Shop;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail, CanResetPassword
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'username',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public $timestamps = false;

    public function profile()
    {
        return $this->hasOne(Profile::class, 'user_id');
    }

    public function addresses()
    {
        return $this->morphToMany(Address::class, 'addressable')
            ->distinct('id')
            ->with('types');
    }

    public function bankAccounts()
    {
        return $this->morphMany(BankAccount::class, 'bank_accountable');
    }

    public function creditCards()
    {
        return $this->morphMany(CreditCard::class, 'credit_cardable');
    }

    public function shop()
    {
        return $this->hasOne(Shop::class, 'id')
            ->with('statistic');
    }

    public function cart()
    {
        return $this->hasMany(CartItem::class)
            ->with(['product', 'productModel']);
    }
}
