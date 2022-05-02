<?php

namespace App\Http\Requests\Account\CreditCard;

use App\Http\Requests\CustomFormRequest;

class AuthorizedCreditCardRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $creditCard = $this->route('credit_card');

        return $creditCard->credit_cardable_id === $this->user()->id &&
            $creditCard->credit_cardable_type === get_class($this->user());
    }
}
