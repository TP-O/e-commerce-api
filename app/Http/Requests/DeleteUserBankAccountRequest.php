<?php

namespace App\Http\Requests;

use App\Models\User\BankAccount;

class DeleteUserBankAccountRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return !is_null(BankAccount::where([
            ['id', $this->route('bank_account')->id],
            ['user_id', $this->user()->id],
        ])->first());
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
