<?php

namespace App\Rules;

use Exception;
use Illuminate\Contracts\Validation\Rule;

abstract class BatchSomethingRule implements Rule
{
    /**
     * Required model for validation.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $model;

    /**
     * Name of key need to be validated.
     *
     * @var string|null
     */
    protected $validatedKey = '';

    /**
     * Name of column corresponds to validated key.
     *
     * @var string
     */
    protected string $column = '';

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(string $model, string $validatedKey = null, string $column = null)
    {
        $this->model = resolve($model);
        $this->validatedKey = $validatedKey;
        $this->column = is_null($column) ? $validatedKey : $column;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $values
     * @return bool
     */
    public function passes($attribute, $values)
    {
        if (!is_array($values)) {
            return false;
        }

        // Get all values of the validated key without null value
        $validatedValues = array_filter(
            array_map(function ($value) {
                if (is_null($this->validatedKey) && isset($value)) {
                    return $value;
                }
                else if (isset($value[$this->validatedKey])) {
                    return $value[$this->validatedKey];
                }
            }, $values),
            function ($value) {
                return !is_null($value);
            }
        );

        try {
            return $this->validate($validatedValues);
        } catch (Exception $_) {
            return false;
        }
    }

    abstract protected function validate(array $validatedValues);
}
