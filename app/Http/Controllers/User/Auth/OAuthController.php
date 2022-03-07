<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use App\Services\Common\AssetService;
use App\Services\Common\Auth\TokenService;
use App\Services\User\AuthService;
use App\Services\User\ProfileService;
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

    private ProfileService $profileService;

    private AssetService $assetService;

    public function __construct(
        AuthService $authService,
        TokenService $tokenService,
        ProfileService $profileService,
        AssetService $assetService)
    {
        $this->supportedDriver = [
            'github',
            'facebook',
            'google',
        ];

        $this->authService = $authService;
        $this->tokenService = $tokenService;
        $this->profileService = $profileService;
        $this->assetService = $assetService;
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
            $user = $this->authService->createOAuthUser($oauthUser->getEmail());
            $avatarImage = $this->assetService->storeAvatar($oauthUser->getAvatar());

            $this->profileService->createProfile($user->id, [
                'username' => $user->name,
                'avatar_image' => $avatarImage,
            ]);
        }

        $token = $this->tokenService->createPAT($user);

        return response()->json([
            'status' => true,
            'data' => $user,
            'token' => $token,
        ]);
    }
}
