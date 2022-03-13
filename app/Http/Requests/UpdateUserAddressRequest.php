<?php

namespace App\Http\Requests;

class UpdateUserAddressRequest extends CustomFormRequest
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
            'full_name' => 'string|max:64',
            'phone' => 'digits_between:10,11',
            'city' => 'string|max:50',
            'province' => 'string|max:50',
            'ward' => 'string|max:50',
            'detail' => 'string',
            'is_home' => 'boolean',
        ];
    }
}
