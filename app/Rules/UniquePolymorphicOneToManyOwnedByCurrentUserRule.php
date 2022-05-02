<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class UniquePolymorphicOneToManyOwnedByCurrentUserRule implements Rule
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
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($model, $morphName)
    {
        $this->model = resolve($model);
        $this->morphName = $morphName;
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
        return is_null($this->model->where([
            [$this->morphName . '_type', get_class(request()->user())],
            [$this->morphName . '_id', request()->user()->id],
            [$attribute, $value],
        ])->first());
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute field already exists.';
    }
}
