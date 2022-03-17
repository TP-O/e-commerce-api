<?php

namespace App\Http\Requests;

class UpdateUserProfileRequest extends CustomFormRequest
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
        return $this->requireLeastOne([
            'display_name' => 'string|max:50',
            'avatar' => 'image|mimes:jpg,jpeg,png|max:1024',
            'phone' => 'digits_between:10,11',
            'gender' => 'numeric|min:0|max:2',
            'date_of_birth' => 'date_format:m/d/Y',
        ]);
    }
}
