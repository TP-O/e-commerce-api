<?php

namespace App\Http\Requests\Product\Review;

use App\Http\Requests\CustomFormRequest;

class CreateReviewRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'order_id' => 'required|integer|min:1',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'string|min:25',
        ];
    }
}
