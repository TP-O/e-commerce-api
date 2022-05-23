<?php

namespace App\Http\Requests\Order;

use App\Http\Requests\CustomFormRequest;

class GetOrderListRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'limit' => 'required|integer|min:1|max:20',
            'status_id' => 'integer|min:1|exists:order_status,id',
        ];
    }
}
