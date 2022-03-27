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
    Route::prefix('resource')->group(function () {
        Route::post('/image', 'ResourceController@uploadImage');
    });

    Route::namespace('Auth')->group(function () {
        Route::prefix('auth')->group(function () {
            Route::post('/sign-up', 'SignUp\UserSignUpController@signUp');

            Route::namespace('SignIn')->group(function () {
                Route::post('/sign-in', 'UserSignInController@signIn');
                Route::post('/sign-out', 'UserSignInController@signOut')->middleware('pat.name:user');
            });

            Route::prefix('admin')->namespace('SignIn')->group(function () {
                Route::post('/sign-in', 'AdminSignInController@signIn');
                Route::post('/sign-out', 'AdminSignInController@signOut')->middleware('pat.name:admin');
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
        Route::post('/reset', 'UserPasswordController@resetPassword')->name('password.reset');

        Route::prefix('admin')->group(function () {
            Route::put('/', 'AdminPasswordController@updatePassword')->middleware('pat.name:admin');
            Route::post('/forgot', 'AdminPasswordController@forgotPassword');
            Route::post('/reset', 'AdminPasswordController@resetPassword')->name('admin.password.reset');
        });
    });

    Route::prefix('account')->namespace('Account')->middleware('pat.name:user')->group(function () {
        Route::prefix('profile')->namespace('Profile')->group(function () {
            Route::get('/', 'UserProfileController@me');
            Route::put('/', 'UserProfileController@updateProfile');
        });

        Route::prefix('addresses')->namespace('Address')->group(function () {
            Route::get('/', 'UserAddressController@show');
            Route::post('/', 'UserAddressController@create');
            Route::put('/{id}', 'UserAddressController@update');
            Route::delete('/{address}', 'UserAddressController@delete');
        });

        Route::prefix('bank-accounts')->namespace('BankAccount')->group(function () {
            Route::get('/', 'UserBankAccountController@show');
            Route::post('/', 'UserBankAccountController@create');
            Route::put('/{bank_account}', 'UserBankAccountController@update');
            Route::delete('/{bank_account}', 'UserBankAccountController@delete');
        });
        Route::prefix('credit-cards')->namespace('CreditCard')->group(function () {
            Route::get('/', 'UserCreditCardController@show');
            Route::post('/', 'UserCreditCardController@create');
            Route::put('/{credit_card}', 'UserCreditCardController@update');
            Route::delete('/{credit_card}', 'UserCreditCardController@delete');
        });
    });

    Route::get('shops/{id}', 'ShopController@get');

    Route::prefix('shop')->namespace('Shop')->middleware('pat.name:user')->group(function() {
        Route::get('/', 'ShopController@getMyShop');
        Route::post('/', 'ShopController@create');
        Route::put('/', 'ShopController@update');
    });
});
