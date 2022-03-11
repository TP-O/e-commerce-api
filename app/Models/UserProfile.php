<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    use HasFactory;

    protected $primaryKey = 'user_id';

    protected $fillable = [
        'user_id',
        'display_name',
        'avatar_image',
        'phone',
        'gender',
        'date_of_birth',
    ];

    protected $casts = [
        'date_of_birth' => 'date:m/d/Y',
    ];

    public $timestamps = false;
}
