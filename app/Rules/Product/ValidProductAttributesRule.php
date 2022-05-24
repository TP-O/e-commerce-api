<?php

namespace App\Rules\Product;

use App\Models\Product\Category;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\Rule;

class ValidProductAttributesRule implements Rule, DataAwareRule
{
    /**
     * All of the data under validation.
     *
     * @var array
     */
    protected $data = [];

    /**
     * Name of key containing list of category ids.
     */
    private $categoryPathKey = '';

    /**
     * Error message.
     *
     * @var string
     */
    private $message = 'The :attribute are invalid.';

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(string $categoryPathKey)
    {
        $this->categoryPathKey = $categoryPathKey;
    }

    /**
     * Set the data under validation.
     *
     * @param  array  $data
     * @return $this
     */
    public function setData($data)
    {
        $this->data = $data;

        return $this;
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
        $categoryAttributes = collect([]);
        $inputAttributeIds = array_map(function ($val) {
            return $val['attribute_id'];
        }, $value ?? []);
        $categoryIds = $this->data[$this->categoryPathKey];
        $categories = Category::whereIn('id', $categoryIds)->with('attributes')->get();

        $categories->each(function ($category) use (&$categoryAttributes) {
            $categoryAttributes = $categoryAttributes->concat($category['attributes']);
        });

        // Check if the redundant attributes are provided
        if (
            $categoryAttributes
            ->whereIn('id', $inputAttributeIds)
            ->count() !== count($inputAttributeIds)
        ) {
            $this->message = 'The :attribute fields have unexpected attribute(s).';

            return false;
        }

        for ($i = 0; $i < $categoryAttributes->count(); $i++) {
            // Check if the attribute id is contained in input attribute ids
            $exists = array_search($categoryAttributes[$i]['id'], $inputAttributeIds);
            $isRequired = $categoryAttributes[$i]['is_required'];

            // Check if the required attribute is missed
            if ($exists === false && $isRequired) {
                $this->message = 'The :attribute fields are missing required attribute(s).';

                return false;
            }
            // Check if the unit is correct
            else if ($exists !== false) {
                // Skip if unit could be null
                if (
                    !isset($value[$exists]['unit']) &&
                    count($categoryAttributes[$i]['units']) === 0
                ) {
                    continue;
                }
                // Error if unit is unavailable
                else if (array_search(
                    $value[$exists]['unit'],
                    $categoryAttributes[$i]['units'],
                ) === false) {
                    $this->message = 'The :attribute fields have incorrect unit(s).';

                    return false;
                }
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
        return $this->message;
    }
}
