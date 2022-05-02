<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class ExistPolymorphicManyToManyOwnedByCurrentUserRule implements Rule
{
    /**
     * Required model for validation.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    private $model = '';

    /**
     * Name of polymorphic relaitonship.
     *
     * @var string
     */
    private $morphName = '';

    /**
     * Name of foreign key.
     *
     * @var string
     */
    private $foreignKey = '';

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($model, $morphName, $foreignKey)
    {
        $this->model = resolve($model);
        $this->morphName = $morphName;
        $this->foreignKey = $foreignKey;
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
        return $this->model->where([
            [$this->morphName . '_type', get_class(request()->user())],
            [$this->morphName . '_id', request()->user()->id],
            [$this->foreignKey, $value],
        ])->count() > 0;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute field is unavailable.';
    }
}
