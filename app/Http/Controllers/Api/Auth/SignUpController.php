<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SignUpUserRequest;
use App\Models\Account\User\Profile;
use App\Models\Account\User\User;
use App\Services\AuthService;
use App\Services\ResourceService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class SignUpController extends Controller
{
    private AuthService $authService;

    private ResourceService $resourceService;

    private array $supportedDriver = [
        'github',
        'facebook',
        'google',
    ];

    public function __construct(
        AuthService $authService,
        ResourceService $resourceService,
    ) {
        $this->authService = $authService;
        $this->resourceService = $resourceService;

        $this->middleware('guest:sanctum');
        $this->middleware('web')->except('signUp');
    }

    /**
     * Create the user account.
     *
     * @param  \App\Http\Requests\Auth\SignUpUserRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signUp(SignUpUserRequest $request)
    {
        $user = $this->authService->createUser($request->validated());
        $token = $user->createToken('')->plainTextToken;

        Profile::create([
            'user_id' => $user->id,
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
            throw new BadRequestHttpException('This OAuth is not supported yet!');
        }

        return Socialite::driver($driver)->redirect();
    }

    /**
     * Handle the OAuth callback.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $driver
     * @return \Illuminate\Http\JsonResponse
     */
    public function OAuthCallback(Request $request, string $driver)
    {
        if (!in_array($driver, $this->supportedDriver)) {
            throw new BadRequestHttpException('This OAuth is not supported yet');
        }

        $oauthUser = Socialite::driver($driver)->user();
        $user = User::where('email', $oauthUser->getEmail())->first();

        if (is_null($user)) {
            $user = $this->authService->createOAuthUser($oauthUser->getEmail());
            $imageId = $this->resourceService->storeImage($oauthUser->getAvatar(), 0);

            Profile::create([
                'user_id' => $user->id,
                'username' => $user->name,
                'avatar_image' => $imageId,
            ]);
        }

        $token = $user->createToken('')->plainTextToken;

        return response()->json([
            'status' => true,
            'data' => $user,
            'token' => $token,
        ]);
    }
}
