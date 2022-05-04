<?php

namespace App\Http\Requests\Account\Address;

use App\Http\Requests\CustomFormRequest;
use App\Models\Addressable;

class DeleteAddressRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Addressable::where([
            ['addressable_id', $this->user()->id],
            ['address_id', $this->route('address')->id],
        ])->count() > 0;
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
