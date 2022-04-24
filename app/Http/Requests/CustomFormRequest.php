<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;

class CustomFormRequest extends FormRequest
{
    /**
     * Handle a failed validation attempt.
     *
     * @param  \Illuminate\Contracts\Validation\Validator  $validator
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'error' => $validator->errors(),
        ], Response::HTTP_BAD_REQUEST));
    }

    /**
     * Require at least one field.
     *
     * @param array $rules
     * @return array
     */
    protected function requireAtLeastOne($rules)
    {
        $atLeastOneRule = 'required_without_all:' . implode(',', array_keys($rules));

        $rules = array_map(function($val) use($atLeastOneRule) {
            if (is_string($val)) {
                return $val . '|' . $atLeastOneRule;
            }

            array_push($val, $atLeastOneRule);

            return $val;
        }, $rules);

        return $rules;
    }
}
