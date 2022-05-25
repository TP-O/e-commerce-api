<?php

namespace App\Http\Requests\Product\Review;

use App\Http\Requests\CustomFormRequest;

class ReplyReviewRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->route('review')->shop_id === $this->user()->id &&
            !empty($this->route('review')->review);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'reply' => 'required|string|min:25',
        ];
    }
}
