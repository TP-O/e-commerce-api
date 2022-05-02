<?php

namespace App\Enums;

enum AddressType: int
{
    case Default = 1;
    case Return = 2;
    case Pickup = 3;
}
