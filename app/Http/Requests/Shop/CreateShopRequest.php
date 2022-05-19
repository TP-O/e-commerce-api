<?php

namespace App\Http\Requests\Shop;

use App\Http\Requests\CustomFormRequest;
use App\Models\Addressable;
use App\Rules\ExistPolymorphicManyToManyOwnedByCurrentUserRule;

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
            'slug' => 'required|string|max:40|unique:shops',
            'phone' => 'required|digits_between:10,11',
            'address.id' => [
                'integer',
                'min:1',
                new ExistPolymorphicManyToManyOwnedByCurrentUserRule(
                    Addressable::class,
                    'addressable',
                    'address_id',
                ),
            ],
            'address.full_name' => 'required_without:address.id|string|max:64',
            'address.phone' => 'required_without:address.id|digits_between:10,11',
            'address.state' => 'required_without:address.id|string|max:50',
            'address.city' => 'required_without:address.id|string|max:50',
            'address.town' => 'required_without:address.id|string|max:50',
            'address.address' => 'required_without:address.id|string',
        ];
    }
}
