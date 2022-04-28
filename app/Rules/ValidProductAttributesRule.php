<?php

namespace App\Rules;

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

    private $categoryPathKey = '';

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
        }, $value);
        $categoryIds = $this->data[$this->categoryPathKey];
        $categories = Category::whereIn('id', $categoryIds)->with('attributes')->get();


        $categories->each(function ($category) use (&$categoryAttributes) {
            $categoryAttributes = $categoryAttributes->concat($category['attributes']);
        });

        if ($categoryAttributes->whereIn('id', $inputAttributeIds)->count() !== count($inputAttributeIds)) {
            return false;
        }

        for ($i = 0; $i < $categoryAttributes->count(); $i++) {
            $exists = array_search($categoryAttributes[$i]['id'], $inputAttributeIds);
            $isRequired = $categoryAttributes[$i]['is_required'];

            if ($exists === false && $isRequired) {
                return false;
            } else if (
                $exists !== false &&
                array_search(
                    $value[$exists]['unit'] ?? '',
                    $categoryAttributes[$i]['units'],
                ) === false
            ) {
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
        return 'The :attribute are invalid.';
    }
}
