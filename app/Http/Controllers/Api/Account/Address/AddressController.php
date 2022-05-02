<?php

namespace App\Http\Controllers\Api\Account\Address;

use App\Http\Controllers\Controller;
use App\Http\Requests\Account\Address\DeleteAddressRequest;
use App\Models\Address;
use App\Services\AddressService;

abstract class AddressController extends Controller
{
    protected AddressService $addressService;

    public function __construct(AddressService $addressService)
    {
        $this->addressService = $addressService;

        $this->middleware('auth:sanctum');
    }

    /**
     * Get all addresses of the user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function all()
    {
        $addresses = request()->user()->addresses;

        return response()->json([
            'status' => true,
            'data' => $addresses,
        ]);
    }

    /**
     * Delete the user's address.
     *
     * @param \App\Http\Requests\Account\Address\DeleteAddressRequest $request
     * @param \App\Models\Address $address
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(DeleteAddressRequest $request, Address $address)
    {
        $address->delete();

        return response()->json([
            'status' => true,
            'data' =>  'Address has been deleted!',
        ]);
    }
}
