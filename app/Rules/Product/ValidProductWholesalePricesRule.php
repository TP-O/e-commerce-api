<?php

namespace App\Rules\Product;

use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\Rule;

class ValidProductWholesalePricesRule implements Rule, DataAwareRule
{
    /**
     * All of the data under validation.
     *
     * @var array
     */
    protected $data = [];

    /**
     * Name of key containing list of models.
     */
    private $modelKey = '';

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(string $modelKey)
    {
        $this->modelKey = $modelKey;
    }

    /**
     * Set the data under validation.
     *
     * @param  array  $data
     * @return $this
     */
    public function setData($data)
    {
        $this->data = $data;

        return $this;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $models = $this->data[$this->modelKey] ?? [];
        $modelSize = count($models);

        // Wholesale prices are only applicable if all models have the same price.
        for ($i = 0; $i < $modelSize - 1; $i++) {
            for ($j = $i + 1; $j < $modelSize; $j++) {
                if ($models[$i]['price'] !== $models[$j]['price']) {
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute field is not applicable.';
    }
}
