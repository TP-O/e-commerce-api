<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\CreateProductRequest;
use App\Models\Product\Product;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('search');
    }

    public function create(CreateProductRequest $request)
    {
        dd($request->validated());
    }
}
