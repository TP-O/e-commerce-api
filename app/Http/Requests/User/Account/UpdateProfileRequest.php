<?php

namespace App\Http\Requests\User\Account;

use App\Http\Requests\CustomFormRequest;

class UpdateProfileRequest extends CustomFormRequest
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
            'display_name' => 'string|max:50',
            'avatar' => 'image|max:1024',
            'phone' => 'digits_ between:10,11',
            'gender' => 'numeric|min:0|max:2',
            'date_of_birth' => 'date_format:m/d/Y',
        ];
    }
}
