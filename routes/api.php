<?php

use App\Models\Account\Admin\Admin;
use App\Models\Account\User\User;
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
    Route::prefix('resources')->middleware('allow:' . join(',', [User::class, Admin::class]))
        ->group(function () {
            Route::post('/images', 'ResourceController@uploadImage');
        });

    Route::namespace('Auth')->group(function () {
        Route::prefix('auth')->group(function () {
            Route::post('/sign-up', 'SignUp\UserSignUpController@signUp');

            Route::namespace('SignIn')->group(function () {
                Route::post('/sign-in', 'UserSignInController@signIn');
                Route::post('/sign-out', 'UserSignInController@signOut')->middleware('allow:' . User::class);
            });

            Route::prefix('admin')->namespace('SignIn')->group(function () {
                Route::post('/sign-in', 'AdminSignInController@signIn');
                Route::post('/sign-out', 'AdminSignInController@signOut')->middleware('allow:' . Admin::class);
            });
        });

        Route::prefix('oauth/{driver}')->namespace('SignUp')->group(function () {
            Route::get('/redirect', 'UserSignUpController@OAuthRedirect');
            Route::get('/callback', 'UserSignUpController@OAuthCallback');
        });
    });

    Route::prefix('email')->namespace('Email')->middleware('allow:' . User::class)->group(function () {
        Route::post('/verify', 'EmailVerificationController@sendEmail');
        Route::get('/verify/{id}/{hash}', 'EmailVerificationController@verifyEmail')->name('verification.verify');
    });

    Route::prefix('password')->namespace('Password')->group(function () {
        Route::put('/', 'UserPasswordController@update')->middleware('allow:' . User::class);
        Route::post('/forgot', 'UserPasswordController@forgot');
        Route::post('/reset', 'UserPasswordController@reset')->name('password.reset');

        Route::prefix('admin')->group(function () {
            Route::put('/', 'AdminPasswordController@update')->middleware('allow:' . Admin::class);
            Route::post('/forgot', 'AdminPasswordController@forgot');
            Route::post('/reset', 'AdminPasswordController@reset')->name('admin.password.reset');
        });
    });

    Route::prefix('account')->namespace('Account')->middleware('allow:' . User::class)->group(function () {
        Route::prefix('profile')->namespace('Profile')->group(function () {
            Route::get('/', 'UserProfileController@me');
            Route::put('/', 'UserProfileController@update');
        });

        Route::prefix('addresses')->namespace('Address')->group(function () {
            Route::get('/', 'UserAddressController@all');
            Route::post('/', 'UserAddressController@create');
            Route::put('/{id}', 'UserAddressController@update');
            Route::delete('/{address}', 'UserAddressController@delete');
        });

        Route::prefix('bank-accounts')->group(function () {
            Route::get('/', 'BankAccountController@all');
            Route::post('/', 'BankAccountController@create');
            Route::put('/{bank_account}', 'BankAccountController@update');
            Route::delete('/{bank_account}', 'BankAccountController@delete');
        });
        Route::prefix('credit-cards')->group(function () {
            Route::get('/', 'CreditCardController@show');
            Route::post('/', 'CreditCardController@create');
            Route::put('/{credit_card}', 'CreditCardController@update');
            Route::delete('/{credit_card}', 'CreditCardController@delete');
        });
    });

    Route::prefix('shops')->namespace('Shop')->group(function () {
        Route::middleware('allow:' . User::class)->group(function () {
            Route::get('/', 'ShopController@mine');
            Route::get('/products', 'ShopController@products');
            Route::post('/', 'ShopController@create');
            Route::put('/', 'ShopController@update');
        });

        Route::get('/{id_or_slug}', 'ShopController@get');
        Route::get('/{id}/products', 'ShopController@publishedProducts');
    });

    Route::prefix('products')->namespace('Product')->group(function () {
        Route::get('/{id}', 'ProductController@get');

        Route::middleware('allow:' . User::class)->group(function () {
            Route::post('/', 'ProductController@create');
            Route::put('/{product}', 'ProductController@update');
            Route::delete('/{product}', 'ProductController@delete');
        });

        Route::middleware('allow:' . Admin::class)->group(function () {
            Route::post('/{product}/recovery', 'ProductController@recovery');
        });

        Route::prefix('categories')->group(function () {
            Route::middleware('allow:' . Admin::class)->group(function () {
                Route::post('/', 'CategoryController@manage');
                Route::post('/{category}/attributes/bind', 'CategoryController@bind')
                    ->where('category', '[1-9]+');
            });

            Route::get('{id}/children', 'CategoryController@children')->where(['id', '[0-9]+']);

            Route::prefix('attributes')->group(function () {
                Route::get('/', 'CategoryController@attributes')
                    ->middleware('allow:' . join(',', [User::class, Admin::class]));

                Route::middleware('allow:' . Admin::class)->group(function () {
                    Route::get('/{input}', 'AttributeController@search');
                    Route::post('/', 'AttributeController@create');
                    Route::put('/{id}', 'AttributeController@update');
                    Route::delete('/{id}', 'AttributeController@delete');
                });
            });
        });
    });

    Route::prefix('cart')->namespace('Order')->middleware('allow:' . User::class)->group(function () {
        Route::get('/', 'CartController@get');
        Route::post('/', 'CartController@add');
        Route::delete('/{product_model_id}', 'CartController@delete');
    });

    Route::prefix('orders')->namespace('Order')->middleware('allow:' . User::class)->group(function () {
        Route::get('/', 'OrderController@get');
        Route::post('/', 'OrderController@create');
    });
});
