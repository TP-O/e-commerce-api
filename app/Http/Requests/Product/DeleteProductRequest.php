<?php

namespace App\Http\Requests\Product;

use App\Enums\ProductStatus;

class DeleteProductRequest extends ShopRequiredRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $shopId = $this->user()->id;
        $product = $this->route('product');

        return parent::authorize() &&
            $product->shop_id === $shopId &&
            $product->status_id !== ProductStatus::Deleted->value;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
