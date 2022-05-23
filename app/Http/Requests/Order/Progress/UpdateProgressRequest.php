<?php

namespace App\Http\Requests\Order\Progress;

use App\Enums\AccountType;
use App\Http\Requests\CustomFormRequest;

class UpdateProgressRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return get_class($this->user()) === AccountType::Admin->value;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'note' => 'string',
        ];
    }
}
