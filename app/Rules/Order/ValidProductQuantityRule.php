<?php

namespace App\Rules\Order;

use App\Models\Product\ProductModel;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\Rule;

class ValidProductQuantityRule implements Rule, DataAwareRule
{
    /**
     * All of the data under validation.
     *
     * @var array
     */
    protected $data = [];

    /**
     * Name of key containing product model id.
     *
     * @var string
     */
    private $modelKey = '';

    /**
     * Name of key containing product quantity.
     *
     * @var string
     */
    private $quantityKey = '';

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(string $modelKey, $quantityKey = '')
    {
        $this->modelKey = $modelKey;
        $this->quantityKey = $quantityKey;
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
        // Apply for quantity field
        if (empty($this->quantityKey)) {
            $models = [ProductModel::find($this->data[$this->modelKey])];

            if (is_null($models[0])) {
                return false;
            }
        }
        // Apply for array of quantity fields
        else {
            $modelIds = array_map(function ($val) {
                return $val[$this->modelKey];
            }, $value);

            $models = ProductModel::whereIn('id', $modelIds)
                ->orderByRaw('ARRAY_POSITION(ARRAY[' . join(',', $modelIds) . '], id)')
                ->get();
        }

        // Check quantity with stock of each product model
        foreach ($models as $key => $model) {
            if (empty($this->quantityKey) && $model->stock < $value) {
                return false;
            }

            if (!empty($this->quantityKey) && $model->stock < $value[$key][$this->quantityKey]) {
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
        return empty($this->quantityKey)
            ? 'The :attribute field is too large.'
            : 'The :attribute.*.' . $this->quantityKey . ' fields are too large.';
    }
}
