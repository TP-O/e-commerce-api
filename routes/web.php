<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function() {
    echo 'test...';
});

Route::prefix('resources')->group(function () {
    Route::get('/images/{id}', 'Api\ResourceController@loadImage')
        ->where('id', '^(demo-[a-z0-9-]{1,}|[a-z0-9]{32})(_tn)?$');
});
