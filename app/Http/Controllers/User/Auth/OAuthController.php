<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use App\Services\Common\TokenService;
use App\Services\User\AuthService;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class OAuthController extends Controller
{
    /**
     * @var array<int, string> Supported driver for OAuth providers.
     */
    private $supportedDriver;

    private AuthService $authService;

    private TokenService $tokenService;

    public function __construct(AuthService $authService, TokenService $tokenService)
    {
        $this->supportedDriver = [
            'github',
            'facebook',
            'google',
        ];

        $this->authService = $authService;
        $this->tokenService = $tokenService;
    }

    /**
     * Redirect to OAuth application.
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function redirect(string $driver)
    {
        if (!in_array($driver, $this->supportedDriver)) {
            throw new NotFoundHttpException();
        }

        return Socialite::driver($driver)->redirect();

    }

    /**
     * Handle OAuth callback.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function callback(string $driver)
    {
        if (!in_array($driver, $this->supportedDriver)) {
            throw new NotFoundHttpException();
        }

        $oauthUser = Socialite::driver($driver)->user();
        $user = $this->authService->existEmail($oauthUser->getEmail());

        if (is_null($user)) {
            $user = $this->authService->createOAuthUser($oauthUser->email);
        }

        $token = $this->tokenService->createPAT($user);

        return response()->json([
            'status' => true,
            'data' => $user,
            'token' => $token,
        ]);
    }
}
