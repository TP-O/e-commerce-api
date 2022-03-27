<?php

namespace App\Http\Controllers\Api\Auth\SignUp;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SignUpUserRequest;
use App\Services\AuthService;
use App\Services\ProfileService;
use App\Services\ResourceService;
use App\Services\TokenService;
use Illuminate\Http\Response;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UserSignUpController extends Controller
{
    private AuthService $authService;

    private TokenService $tokenService;

    private ProfileService $profileService;

    private ResourceService $resourceService;

    private array $supportedDriver = [
        'github',
        'facebook',
        'google',
    ];

    public function __construct(
        AuthService $authService,
        TokenService $tokenService,
        ProfileService $profileService,
        ResourceService $resourceService,
    ) {
        $this->authService = $authService;
        $this->tokenService = $tokenService;
        $this->profileService = $profileService;
        $this->resourceService = $resourceService;

        $this->middleware('guest:sanctum');
        $this->middleware('web')->except('signUp');
    }

    /**
     * Create an user account.
     *
     * @param  \App\Http\Requests\Auth\SignUpUserRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signUp(SignUpUserRequest $request)
    {
        $signUpInput = $request->validated();

        $user = $this->authService->createUser($signUpInput);
        $token = $this->tokenService->createPAT($user);

        $this->profileService->createUserProfile($user->id, [
            'username' => $user->username,
        ]);

        return response()->json([
            'status' => true,
            'data' => $user,
            'token' => $token,
        ], Response::HTTP_CREATED);
    }

    /**
     * Redirect to the OAuth application.
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function OAuthRedirect(string $driver)
    {
        if (!in_array($driver, $this->supportedDriver)) {
            throw new NotFoundHttpException('This OAuth is not supported yet!');
        }

        return Socialite::driver($driver)->redirect();
    }

    /**
     * Handle the OAuth callback.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function OAuthCallback(string $driver)
    {
        if (!in_array($driver, $this->supportedDriver)) {
            throw new NotFoundHttpException('This OAuth is not supported yet');
        }

        $oauthUser = Socialite::driver($driver)->user();
        $user = $this->authService->existEmail($oauthUser->getEmail());

        if (is_null($user)) {
            $user = $this->authService->createOAuthUser($oauthUser->getEmail());
            $imageId = $this->resourceService->storeImage($oauthUser->getAvatar(), 1);

            $this->profileService->createUserProfile($user->id, [
                'username' => $user->name,
                'avatar_image' => $imageId,
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
