<?php

namespace App\Rules;

use Error;
use Exception;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Database\Eloquent\Model;

abstract class BatchSomethingRule implements Rule
{
    protected Model $model;

    protected string $property;

    protected string $column;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(string $model, string $property, string $column = null)
    {
        $this->model = resolve($model);
        $this->property = $property;
        $this->column = is_null($column) ? $property : $column;
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

        $uniqueValues = array_filter(array_map(function ($value) {
            if (isset($value[$this->property])) {
                return $value[$this->property];
            }
        }, $values), function ($value) {
            return !is_null($value);
        });

        try {
            return $this->validate($uniqueValues);
        } catch (Exception $_) {
            return false;
        }
    }

    abstract protected function validate(array $values);
}
