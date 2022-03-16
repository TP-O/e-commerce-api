<?php

namespace App\Services;

use App\Enums\UserAddressType;
use App\Models\User\Address;
use App\Models\User\AddressLink;
use Illuminate\Support\Arr;

class AddressService
{
    /**
     * Get all addresses of an user.
     *
     * @param int $userId
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllUserAddresses($userId)
    {
        return Address::select('user_addresses.*')
            ->distinct('id')
            ->join(
                'user_address_links',
                'user_addresses.id',
                'user_address_links.address_id'
            )
            ->where('user_id', $userId)
            ->with('types')
            ->get();
    }

    /**
     * Create list of address type id.
     *
     * @param array<string, boolean> $address
     * @return array<int>
     */
    private function createAddressTypeIds($address)
    {
        $typeIds = [];

        empty($address['is_default_address'])
            ?: array_push($typeIds, UserAddressType::Default);
        empty($address['is_return_address'])
            ?: array_push($typeIds, UserAddressType::Return);
        empty($address['is_pickup_address'])
            ?: array_push($typeIds, UserAddressType::Pickup);

        return $typeIds;
    }

    /**
     * Bind the address with specified types.
     *
     * @param int $userId
     * @param array<string, any> $address
     * @return bool
     */
    private function linkUserAddresses($userId, $address)
    {
        $newLinks = empty($address['is_new'])
            ? []
            : [[
                'user_id' => $userId,
                'address_id' => $address['id'],
                'type_id' => null,
            ]];

        $typeIds = $this->createAddressTypeIds($address);

        if (!empty($typeIds)) {
            // Delete the old links between addresses and types
            AddressLink::where('user_id', $userId)
                ->whereIn('type_id', $typeIds)
                ->delete();

            array_push(
                $newLinks,
                ...array_map(function ($typeId) use ($userId, $address) {
                    return [
                        'user_id' => $userId,
                        'address_id' => $address['id'],
                        'type_id' => $typeId,
                    ];
                }, $typeIds)
            );
        }

        return AddressLink::insert($newLinks);
    }

    /**
     * Create an user's address.
     *
     * @param int $userId
     * @param array<string, any> $input
     * @return \App\Models\User\Address
     */
    public function createUserAddress($userId, $input)
    {
        $address = new Address([
            ...$input,
            'user_id' => $userId,
        ]);

        $address->save();

        $this->linkUserAddresses(
            auth()->user()->id,
            [
                ...$input,
                'id' => $address->id,
                'is_new' => true,
            ]
        );

        return $address;
    }

    /**
     * Check if the address is owned by the user.
     *
     * @param int $userId
     * @param int $addressId
     * @return bool
     */
    public function belongToUser($userId, $addressId)
    {
        return !is_null(AddressLink::where([
            ['user_id', $userId],
            ['address_id', $addressId],
        ])->first());
    }

    /**
     * Update the user's address.
     *
     * @param int $userId
     * @param int $addressId
     * @param array<string, any> $input
     * @return bool
     */
    public function updateUserAddress($userId, $addressId, $input)
    {
        $this->linkUserAddresses($userId, [
            ...$input,
            'id' => $addressId,
        ]);

        return Address::where('id', $addressId)
            ->update(Arr::except($input, [
                'is_pickup_address',
                'is_return_address',
                'is_default_address',
            ]));
    }

    /**
     * Delete the user's address.
     *
     * @param int $addressId
     * @return bool
     */
    public function deleteUserAddress($addressId)
    {
        return Address::where('id', $addressId)->delete();
    }
}
