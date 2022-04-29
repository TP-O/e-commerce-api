<?php

namespace App\Rules;

class BatchExistsRule extends BatchSomethingRule
{
    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute.*.' . $this->property . ' fields are unavailable.';
    }

    protected function validate(array $validatedValues)
    {
        return $this->model->whereIn($this->column, $validatedValues)->count() > 0;
    }
}
