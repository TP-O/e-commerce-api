<?php

namespace App\Rules\Resource;

use App\Services\ResourceService;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Storage;

class ExistImageRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
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
        if (preg_match('/^[a-zA-Z0-9-]*$/', $value) === 0) {
            return false;
        }

        foreach (ResourceService::getImageExtensions() as $extension) {
            if (Storage::exists(
                ResourceService::getResourcePaths()['image'] . $value . '.' . $extension,
            )) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute field does not exist.';
    }
}
