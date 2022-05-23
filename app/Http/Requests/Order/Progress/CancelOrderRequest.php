<?php

namespace App\Http\Requests\Order\Progress;

use App\Enums\AccountType;
use App\Enums\OrderStatus;

class CancelOrderRequest extends UpdateProgressRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $isUserAllowed = $this->user()->id === $this->route('order')->user_id &&
            $this->route('order')->status_id === OrderStatus::Processing->value;

        $isShopAllowed = $this->user()->id === $this->route('order')->shop_id &&
            ($this->route('order')->status_id === OrderStatus::Processing->value ||
                $this->route('order')->status_id === OrderStatus::Ready->value
            );


        return parent::authorize() ||
            (get_class($this->user()) === AccountType::User->value &&
                ($isUserAllowed ||
                    $isShopAllowed
                )
            );
    }
}
