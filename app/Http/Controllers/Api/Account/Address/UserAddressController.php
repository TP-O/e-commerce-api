<?php

namespace App\Http\Controllers\Api\Account\Address;

use App\Http\Requests\Account\Address\CreateUserAddressRequest;
use App\Http\Requests\Account\Address\UpdateUserAddressRequest;
use Illuminate\Http\Response;

class UserAddressController extends AddressController
{
    /**
     * Create the user's address.
     *
     * @param \App\Http\Requests\Account\Address\CreateUserAddressRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateUserAddressRequest $request)
    {
        $address = $this->addressService->create(
            $request->user()->id,
            get_class($request->user()),
            $request->validated(),
        );

        return response()->json([
            'status' => true,
            'data' => $address,
        ], Response::HTTP_CREATED);
    }

    /**
     * Update the user's address.
     *
     * @param \App\Http\Requests\Account\Address\UpdateUserAddressRequest $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateUserAddressRequest $request, int $id)
    {
        $this->addressService->update(
            $request->user()->id,
            get_class($request->user()),
            $id,
            $request->validated(),
        );

        return response()->json([
            'status' => true,
            'data' =>  'Address has been updated!',
        ]);
    }
}
