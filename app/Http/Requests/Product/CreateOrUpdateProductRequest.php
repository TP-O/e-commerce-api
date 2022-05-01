<?php

namespace App\Http\Requests\Product;

abstract class CreateOrUpdateProductRequest extends ShopRequiredRequest
{
    public function passedValidation()
    {
        $this->replace([
            'products' => array_map(function ($product) {
                $product['variations'] = $product['variations'] ?? [];

                return $product;
            }, $this->input('products')),
        ]);
    }
}
