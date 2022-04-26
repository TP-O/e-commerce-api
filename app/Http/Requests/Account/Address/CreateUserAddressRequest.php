<?php

namespace App\Http\Requests\Account\Address;

use App\Http\Requests\CustomFormRequest;

class CreateUserAddressRequest extends CustomFormRequest
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
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        if (is_null(auth()->user()->shop)) {
            $this->getInputSource()->remove('is_pickup_address');
            $this->getInputSource()->remove('is_return_address');
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'full_name' => 'required|string|max:64',
            'phone' => 'required|digits_between:10,11',
            'state' => 'required|string|max:50',
            'city' => 'required|string|max:50',
            'town' => 'required|string|max:50',
            'address' => 'required|string',
            'is_home' => 'boolean',
            'is_pickup_address' => 'boolean',
            'is_default_address' => 'boolean',
            'is_return_address' => 'boolean',
        ];
    }
}
