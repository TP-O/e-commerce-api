<?php

namespace App\Http\Requests;

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
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'type_id' => 'numeric|min:1|max:3',
            'full_name' => 'required|string|max:64',
            'phone' => 'required|digits_between:10,11',
            'city' => 'required|string|max:50',
            'province' => 'required|string|max:50',
            'ward' => 'required|string|max:50',
            'detail' => 'required|string',
            'is_home' => 'boolean',
        ];
    }
}
