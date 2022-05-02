<?php

namespace App\Http\Requests\Account\Address;

use App\Http\Requests\CustomFormRequest;

abstract class CreateOrUpdateUserAddressRequest extends CustomFormRequest
{
    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        if (is_null(auth()->user()->shop)) {
            $this->getInputSource()->remove('is_pickup_address');
            $this->getInputSource()->remove('is_return_address');
        }
    }
}
