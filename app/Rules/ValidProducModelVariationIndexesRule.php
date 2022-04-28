<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\Rule;

class ValidProducModelVariationIndexesRule implements Rule, DataAwareRule
{
    /**
     * All of the data under validation.
     *
     * @var array
     */
    protected $data = [];

    private $variationKey = '';

    private $variationIndexKey = '';

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(string $variationKey, string $variationIndexKey)
    {
        $this->variationKey = $variationKey;
        $this->variationIndexKey = $variationIndexKey;
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

        if (empty($variations)) {
            return empty($value[0]['variation_index']);
        }

        foreach ($value as $val) {
            if (count($val[$this->variationIndexKey]) !== count($variations)) {
                return false;
            }

            foreach ($variations as $key => $variation) {
                if ($val[$this->variationIndexKey][$key] >= count($variation['options'])) {
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
        return 'The :attribute.*.' . $this->variationIndexKey . ' fields are invalid.';
    }
}
