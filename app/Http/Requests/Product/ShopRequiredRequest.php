<?php

namespace App\Http\Requests\Product;

use App\Http\Requests\CustomFormRequest;

abstract class ShopRequiredRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return !is_null(request()->user()->shop);
    }
}
