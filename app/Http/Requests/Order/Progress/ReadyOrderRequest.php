<?php

namespace App\Http\Requests\Order\Progress;

use App\Enums\AccountType;
use App\Enums\OrderStatus;
use App\Models\Addressable;
use App\Rules\ExistPolymorphicManyToManyOwnedByCurrentUserRule;

class ReadyOrderRequest extends UpdateProgressRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return get_class($this->user()) === AccountType::User->value &&
            $this->user()->id === $this->route('order')->shop_id &&
            $this->route('order')->status_id === OrderStatus::Processing->value;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            ...parent::rules(),
            'pickup_address_id' => [
                'required',
                'integer',
                'min:1',
                new ExistPolymorphicManyToManyOwnedByCurrentUserRule(
                    Addressable::class,
                    'addressable',
                    'address_id',
                ),
            ],
        ];
    }
}
