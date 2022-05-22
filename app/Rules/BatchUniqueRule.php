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
        $validatedKey = is_null($this->validatedKey)
            ? ''
            : '.' . $this->validatedKey;

        return 'The :attribute.*' . $validatedKey . ' fields have taken value.';
    }

    protected function validate(array $validatedValues)
    {
        return $this->model->whereIn($this->column, $validatedValues)->count() === 0;
    }
}
