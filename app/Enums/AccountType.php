<?php

namespace App\Enums;

use App\Models\Account\Admin\Admin;
use App\Models\Account\User\User;

enum AccountType: string
{
    case Admin = Admin::class;
    case User = User::class;
}
