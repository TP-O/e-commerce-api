<?php

namespace App\Rules\Product;

use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\Rule;

class ValidNumberOfProducModelsRule implements Rule, DataAwareRule
{
    /**
     * All of the data under validation.
     *
     * @var array
     */
    protected $data = [];

    /**
     * Name of key containing list of variations.
     *
     * @var string
     */
    private $variationKey = '';

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(string $variationKey)
    {
        $this->variationKey = $variationKey;
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
        $variations = $this->data[$this->variationKey] ?? [];
        $modelSize = 1;

        foreach ($variations as $variation) {
            $modelSize *= count($variation['options']);
        }

        // Number of models must be equal to combination of options
        return count($value) === $modelSize;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute field has incorrect quantity.';
    }
}
