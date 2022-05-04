<?php

namespace App\Rules\Product;

use App\Models\Product\Category;
use Illuminate\Contracts\Validation\Rule;

class ValidProductCategoryPathRule implements Rule
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
        $categories = Category::whereIn('id', $value)
            ->orderByRaw('ARRAY_POSITION(ARRAY[' . join(',', $value) . '], id)')
            ->get();
        $count = $categories->count();

        // All categories must be valid,
        // first category must be a root,
        // and latest category must be a leave.
        if (
            $count !== count($value) ||
            !is_null($categories[0]->parent_id) ||
            $categories[$count - 1]->number_of_children !== 0
        ) {
            return false;
        }

        // Category level must be in order
        for ($i = $count - 1; $i > 0; $i--) {
            if ($categories[$i]->parent_id !== $categories[$i - 1]->id) {
                return false;
            }
        }

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute field is invalid.';
    }
}
