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

Route::prefix('v2')->group(function () {
    Route::prefix('user')->namespace('User')->group(function () {
        Route::namespace('Auth')->group(function () {
            // Authenticate user
            Route::prefix('auth')->controller('AuthController')->group(function () {
                Route::post('/sign-up', 'signUp');
                Route::post('/sign-in', 'signIn');
                Route::post('/sign-out', 'signOut');
            });

            // OAuth
            Route::prefix('oauth')->controller('OAuthController')->middleware('web')->group(function () {
                Route::get('/{driver}/redirect', 'redirect');
                Route::get('/{driver}/callback', 'callback');
            });

            // Verify email
            Route::prefix('email')->controller('EmailVerificationController')->group(function () {
                Route::post('/verify', 'sendEmail');
                Route::get('/verify/{id}/{hash}', 'verify')->name('verification.verify');
            });

            // Reset password
            Route::prefix('password')->controller('PasswordResetController')->group(function () {
                Route::post('/forgot', 'forgotPassword');
                Route::post('/reset', 'resetPassword')->name('password.reset');
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

    Route::prefix('admin')->namespace('Admin')->group(function () {
        Route::namespace('Auth')->group(function () {
            // Authenticate admin
            Route::prefix('auth')->controller('AuthController')->group(function () {
                Route::post('/sign-in', 'signIn');
                Route::post('/sign-out', 'signOut');
            });

            // Reset password
            Route::prefix('password')->controller('PasswordResetController')->group(function () {
                Route::post('/forgot', 'forgotPassword');
                Route::post('/reset', 'resetPassword')->name('password.reset');
            });
        });
    });
});
