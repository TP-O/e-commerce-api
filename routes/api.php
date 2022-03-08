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

Route::prefix('v2')->namespace('Api')->group(function () {
    Route::prefix('/')->group(function () {
        Route::namespace('Auth')->group(function () {
            Route::prefix('auth')->group(function () {
                Route::post('/sign-up', 'SignUp\UserSignUpController@signUp');

                Route::namespace('SignIn')->group(function () {
                    Route::post('/sign-in', 'UserSignInController@signIn');
                    Route::post('/sign-out', 'UserSignInController@signOut')->middleware('pat.name:user');
                });
            });

            Route::prefix('oauth/{driver}')->namespace('SignUp')->group(function () {
                Route::get('/redirect', 'UserSignUpController@OAuthRedirect');
                Route::get('/callback', 'UserSignUpController@OAuthCallback');
            });
        });

        Route::prefix('email')->namespace('Email')->group(function () {
            Route::post('/verify', 'EmailVerificationController@sendEmail');
            Route::get('/verify/{id}/{hash}', 'EmailVerificationController@verifyEmail')->name('verification.verify');
        });

        Route::prefix('password')->namespace('Password')->group(function () {
            Route::put('/', 'UserPasswordController@updatePassword')->middleware('pat.name:user');
            Route::post('/forgot', 'UserPasswordController@forgotPassword');
            Route::put('/reset', 'UserPasswordController@resetPassword')->name('password.reset');
        });

        Route::prefix('account')->namespace('Account')->middleware('pat.name:user')->group(function () {
            Route::prefix('profile')->namespace('Profile')->group(function () {
                Route::get('/', 'UserProfileController@me');
                Route::put('/', 'UserProfileController@updateProfile');
            });
        });
    });

    Route::prefix('/admin')->group(function () {
        Route::prefix('auth')->namespace('Auth')->group(function () {
            Route::name('SignIn')->group(function () {
                Route::post('/sign-in', 'AdminSignInController@signIn');
                Route::post('/sign-out', 'AdminSignInController@signOut')->middleware('pat.name:admin');
            });
        });

        Route::prefix('password')->namespace('Password')->group(function () {
            Route::put('/', 'AdminPasswordController@updatePassword')->middleware('pat.name:admin');
            Route::post('/forgot', 'AdminPasswordController@forgotPassword');
            Route::put('/reset', 'AdminPasswordController@resetPassword')->name('admin.password.reset');
        });
    });
});
