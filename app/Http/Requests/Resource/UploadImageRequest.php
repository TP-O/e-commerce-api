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
            'ratio' => 'required|integer|min:0|max:1',
            'image' => 'required|image|mimes:jpg,jpeg,png|max:1024|dimensions:min_width=360,min_height=180',
            'is_demo' => 'boolean',
        ];
    }
}
