<?php

namespace App\Http\Requests\Account\CreditCard;

use App\Http\Requests\CustomFormRequest;

class AuthorizedUserBankAccountRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->route('credit_card')->user_id === auth()->user()->id;
    }
}
