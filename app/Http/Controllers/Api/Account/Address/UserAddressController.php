<?php

namespace App\Http\Controllers\Api\Account\Address;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserAddressRequest;
use App\Http\Requests\UpdateUserAddressRequest;
use App\Services\AddressService;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class UserAddressController extends Controller
{
    private AddressService $addressService;

    public function __construct(AddressService $addressService)
    {
        $this->addressService = $addressService;

        $this->middleware('auth:sanctum');
    }

    /**
     * Get all addresses of an user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        $addresses = $this->addressService->getAllUserAddresses(auth()->user()->id);

        return response()->json([
            'status' => true,
            'data' => $addresses,
        ]);
    }

    /**
     * Store the user's address.
     *
     * @param \App\Http\Requests\CreateUserAddressRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateUserAddressRequest $request)
    {
        $createUserAddressInput = $request->validated();

        $address = $this->addressService->createUserAddress(
            auth()->user()->id,
            $createUserAddressInput,
        );

        return response()->json([
            'status' => true,
            'data' => $address,
        ]);
    }

    /**
     * Update the user's address.
     *
     * @param \App\Http\Requests\UpdateUserAddressRequest $request
     * @param int $addressId
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateUserAddressRequest $request, $addressId)
    {
        $updateUserAddressInput = $request->validated();

        if (!$this->addressService->belongToUser(auth()->user()->id, $addressId)) {
            throw new BadRequestHttpException('Nothing to update!');
        }

        $this->addressService->updateUserAddress(
            auth()->user()->id,
            $addressId,
            $updateUserAddressInput,
        );

        return response()->json([
            'status' => true,
            'data' =>  'Address has been updated!',
        ]);
    }

    /**
     * Delete the user's address.
     *
     * @param int $addressId
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($addressId)
    {
        if (!$this->addressService->belongToUser(auth()->user()->id, $addressId)) {
            throw new BadRequestHttpException('Nothing to delete!');
        }

        $this->addressService->deleteUserAddress($addressId);

        return response()->json([
            'status' => true,
            'data' =>  'Address has been deleted!',
        ]);
    }
}
