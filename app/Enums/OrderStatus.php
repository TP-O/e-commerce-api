<?php

namespace App\Enums;

enum OrderStatus: int
{
    case Processing = 1;
    case Ready = 2;
    case Shipping = 3;
    case Delivered = 4;
    case Cancelled = 5;
}
