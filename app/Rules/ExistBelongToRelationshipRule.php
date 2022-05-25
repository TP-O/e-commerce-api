<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class ExistBelongToRelationshipRule implements Rule
{
    /**
     * Required model for validation.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    private $model = '';

    /**
     * Name of foreign key.
     *
     * @var string
     */
    private $foreignKey = '';

    /**
     * Expected value of foreign key.
     *
     * @var mixed
     */
    private $expectedValue = null;

    /**
     * Validated key of array.
     *
     * @var null|string
     */
    private $key = null;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($model, $foreignKey, $expectedValue, $key = null)
    {
        $this->model = resolve($model);
        $this->foreignKey = $foreignKey;
        $this->expectedValue = $expectedValue;
        $this->key = $key;
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
        // For non-array value
        if (is_null($this->key)) {
            $foreignKeyValue = $this->model
                ->where('id', $value)
                ->first()
                ?->{$this->foreignKey};

            return $foreignKeyValue === $this->expectedValue;
        }

        // For array value
        $uniqueKeys = empty($this->key)
            ? $value
            : array_filter(
                array_map(function ($val) {
                    if (isset($val[$this->key])) {
                        return $val[$this->key];
                    }
                }, $value),
                function ($val) {
                    return !is_null($val);
                },
            );

        return $this->model
            ->whereIn('id', $uniqueKeys)
            ->get()
            ->where($this->foreignKey, $this->expectedValue)
            ->count() === count($uniqueKeys);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return is_null($this->key)
            ? 'The :attribute field is invalid'
            : 'The :attribute fields have at least one model containing invalid ' . $this->foreignKey;
    }
}
