<?php

namespace App\Http\Requests\Shop;

use App\Http\Requests\CustomFormRequest;
use App\Rules\Resource\ExistImageRule;

class UpdateShopRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return !is_null(auth()->user()->shop);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return $this->requireAtLeastOne([
            'name' => 'string|max:30',
            'slug' => 'string|max:40|unique:shops',
            'description' => 'string|max:500',
            'avatar_image' => [
                'string',
                new ExistImageRule(),
            ],
            'cover_image' => [
                'string',
                new ExistImageRule(),
            ],
            'banners' => 'array|max:5',
            'banners.*.image' => 'required_without:banners.*.video|filled',
            'banners.*.image.id' => [
                'required_with:banners.*.image',
                'string',
                new ExistImageRule(),
            ],
            'banners.*.image.hyper_link' => [
                'string',
                'regex:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/',
            ],
            'banners.*.video' => [
                'required_without:banners.*.image',
                'string',
                'regex:/^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/',
            ],
        ]);
    }
}
