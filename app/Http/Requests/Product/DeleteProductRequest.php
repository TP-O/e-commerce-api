<?php

namespace App\Http\Requests\Product;

use App\Models\Product\Product;

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
        $productIds = $this->input('ids');

        return parent::authorize() && Product::where('shop_id', $shopId)
            ->whereIn('id', $productIds)
            ->count() === count($productIds);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'ids' => 'required|array',
            'ids.*' => 'integer|min:1',
        ];
    }
}
