<?php

namespace App\Enums;

enum UserAddress: int
{
    case Default = 1;
    case Return = 2;
    case Pickup = 3;
}
