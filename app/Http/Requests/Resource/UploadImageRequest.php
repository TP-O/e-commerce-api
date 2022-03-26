<?php

namespace App\Http\Requests\Resource;

use App\Http\Requests\CustomFormRequest;

class UploadImageRequest extends CustomFormRequest
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
            'ratio' => 'required|numeric|min:0|max:1',
            'file' => 'required|image|mimes:jpg,jpeg,png|max:1024',
        ];
    }
}
