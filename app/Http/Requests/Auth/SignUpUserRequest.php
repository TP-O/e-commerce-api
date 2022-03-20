<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\CustomFormRequest;

class SignUpUserRequest extends CustomFormRequest
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
            'username' => 'required|string|min:5|max:50|unique:users',
            'email' => 'required|email|max:50|unique:users',
            'password' => 'required|string|min:5|confirmed',
        ];
    }
}
