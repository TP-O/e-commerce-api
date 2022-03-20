<?php

namespace App\Http\Controllers\Api\Account\Address;

use App\Http\Controllers\Controller;
use App\Http\Requests\Address\CreateUserAddressRequest;
use App\Http\Requests\Address\DeleteUserAddressRequest;
use App\Http\Requests\Address\UpdateUserAddressRequest;
use App\Models\User\Address;
use App\Services\AddressService;
use Illuminate\Http\Response;

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
        $addresses = Address::select('user_addresses.*')
            ->distinct('id')
            ->join(
                'user_address_links',
                'user_addresses.id',
                'user_address_links.address_id'
            )
            ->where('user_id', auth()->user()->id)
            ->with('types')
            ->get();

        return response()->json([
            'status' => true,
            'data' => $addresses,
        ]);
    }

    /**
     * Store the user's address.
     *
     * @param \App\Http\Requests\Address\CreateUserAddressRequest $request
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
        ], Response::HTTP_CREATED);
    }

    /**
     * Update the user's address.
     *
     * @param \App\Http\Requests\Address\UpdateUserAddressRequest $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateUserAddressRequest $request, $id)
    {
        $updateUserAddressInput = $request->validated();

        $this->addressService->updateUserAddress(
            auth()->user()->id,
            $id,
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
     * @param \App\Http\Requests\Address\DeleteUserAddressRequest $request
     * @param \App\Models\User\Address $address
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(DeleteUserAddressRequest $request, Address $address)
    {
        $address->delete();

        return response()->json([
            'status' => true,
            'data' =>  'Address has been deleted!',
        ]);
    }
}
