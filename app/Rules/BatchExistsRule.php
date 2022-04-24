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
        return 'The :attribute.*.' . $this->property . ' fileds are invalid.';
    }

    protected function validate(array $values)
    {
        return count($values) === 0 ||
            $this->model->whereIn($this->column, $values)->count() > 0;
    }
}
