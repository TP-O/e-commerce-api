<?php

namespace App\Enums;

enum ProductOrder: int
{
    case Newest = 1;
    case HighToLow = 2;
    case LowToHigh = 3;
}
