<?php

namespace App\Services;

use App\Enums\UserAddressType;
use App\Models\User\Address;
use App\Models\User\AddressLink;
use Illuminate\Support\Arr;

class AddressService
{
    /**
     * Get all addresses of the user.
     *
     * @param int $userId
     * @return Illuminate\Support\Collection
     */
    public function getUserAddresses($userId)
    {
        $addresses = Address::select('user_addresses.*')
            ->distinct('id')
            ->join(
                'user_address_links',
                'user_addresses.id',
                'user_address_links.address_id'
            )
            ->where('user_id', $userId)
            ->with('types')
            ->get();

        return $addresses;
    }

    /**
     * Create list of address type id.
     *
     * @param array $address
     * @return array
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
     * @param array $address
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
     * @param array $input
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
            $userId,
            [
                ...$input,
                'id' => $address->id,
                'is_new' => true,
            ]
        );

        return $address;
    }

    /**
     * Update the user's address.
     *
     * @param int $userId
     * @param int $addressId
     * @param array $input
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
}
