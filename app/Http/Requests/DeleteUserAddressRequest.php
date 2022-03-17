<?php

namespace App\Http\Requests;

use App\Models\User\AddressLink;

class DeleteUserAddressRequest extends CustomFormRequest
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
