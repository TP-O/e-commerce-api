<?php

namespace App\Models\User;

use App\Models\Address;
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
        return $this->hasOne(UserProfile::class, 'user_id');
    }

    public function addresses()
    {
        return $this->belongsToMany(Address::class, 'user_addresses')
            ->withPivot('is_home');
    }
}
