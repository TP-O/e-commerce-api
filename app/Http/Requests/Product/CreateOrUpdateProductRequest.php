<?php

namespace App\Http\Requests\Product;

abstract class CreateOrUpdateProductRequest extends ShopRequiredRequest
{
    public function passedValidation()
    {
        $this->merge([
            'attributes' => $this->input('attributes') ?? [],
            'variations' => $this->input('variations') ?? [],
            'wholesale_prices' => $this->input('wholesale_prices') ?? [],
        ]);
    }
}
