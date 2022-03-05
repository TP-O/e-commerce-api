<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v2'], function () {
    Route::group(['prefix' => 'user', 'namespace' => 'User'], function () {
        Route::group(['namespace' => 'Auth'], function () {
            // Authenticate user
            Route::group(['prefix' => 'auth'], function () {
                Route::post('/sign-up', 'AuthController@signUp');
                Route::post('/sign-in', 'AuthController@signIn');
                Route::post('/sign-out', 'AuthController@signOut');
            });

            // OAuth
            Route::group(['prefix' => 'oauth', 'middleware' => 'web'], function () {
                Route::get('/{driver}/redirect', 'OAuthController@redirect')->name('oauth.redirect');
                Route::get('/{driver}/callback', 'OAuthController@callback')->name('oauth.callback');
            });

            // Verify email
            Route::group(['prefix' => 'email'], function () {
                Route::post('/verify', 'EmailVerificationController@sendEmail');
                Route::get('/verify/{id}/{hash}', 'EmailVerificationController@verify')->name('verification.verify');
            });

            // Reset password
            Route::group(['prefix' => 'password'], function () {
                Route::post('/forgot', 'PasswordResetController@forgotPassword');
                Route::post('/reset', 'PasswordResetController@resetPassword')->name('password.reset');
            });
        });

        // // Manage profile
        // Route::group(['prefix' => 'profile'], function () {
        //     Route::get('/', 'ProfileController@me');
        //     Route::put('/username', 'ProfileController@updateUsername');
        //     Route::put('/email', 'ProfileController@updateEmail');
        //     Route::put('/password', 'ProfileController@updatePassword');
        // });
    });

    // Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function () {
    //     // Authenticate admin
    //     Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function () {
    //         //
    //     });
    // });
});
