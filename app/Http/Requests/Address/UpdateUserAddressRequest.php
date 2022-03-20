<?php

namespace App\Http\Requests\Address;

use App\Models\User\AddressLink;

class UpdateUserAddressRequest extends AuthorizedUserAddressRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return $this->requireLeastOne([
            'full_name' => 'string|max:64',
            'phone' => 'digits_between:10,11',
            'state' => 'string|max:50',
            'city' => 'string|max:50',
            'town' => 'string|max:50',
            'address' => 'string',
            'is_home' => 'boolean',
            'is_pickup_address' => 'boolean',
            'is_default_address' => 'boolean',
            'is_return_address' => 'boolean',
        ]);
    }
}
