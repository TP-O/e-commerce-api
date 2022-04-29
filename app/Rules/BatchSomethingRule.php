<?php

namespace App\Rules;

use Exception;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Database\Eloquent\Model;

abstract class BatchSomethingRule implements Rule
{
    /**
     * Required model for validation.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected Model $model;

    /**
     * Name of key need to be validated.
     *
     * @var string
     */
    protected string $validatedKey = '';

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
    public function __construct(string $model, string $validatedKey, string $column = null)
    {
        $this->model = resolve($model);
        $this->validatedKey = $validatedKey;
        $this->column = is_null($column) ? $validatedKey : $column;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
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
                if (isset($value[$this->validatedKey])) {
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
