<?php

namespace App\Http\Requests\Account\Address;

use App\Http\Requests\CustomFormRequest;
use App\Models\User\AddressLink;

class AuthorizedUserAddressRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return !is_null(AddressLink::where([
            ['user_id', $this->user()->id],
            ['address_id', $this->route('address')->id],
        ])->first());
    }
}
