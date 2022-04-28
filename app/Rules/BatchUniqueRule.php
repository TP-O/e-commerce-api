<?php

namespace App\Rules;

class BatchUniqueRule extends BatchSomethingRule
{
    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute.*.' . $this->property . ' fields have already been taken.';
    }

    protected function validate(array $values)
    {
        return $this->model->whereIn($this->column, $values)->count() === 0;
    }
}

