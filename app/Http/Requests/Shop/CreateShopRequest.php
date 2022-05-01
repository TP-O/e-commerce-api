<?php

namespace App\Http\Requests\Shop;

use App\Http\Requests\CustomFormRequest;

class CreateShopRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return is_null(auth()->user()->shop);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:30',
            'slug' => 'required|string|max:40',
            'phone' => 'required|digits_between:10,11',
            'address.full_name' => 'required|string|max:64',
            'address.phone' => 'required|digits_between:10,11',
            'address.state' => 'required|string|max:50',
            'address.city' => 'required|string|max:50',
            'address.town' => 'required|string|max:50',
            'address.address' => 'required|string',
        ];
    }
}
