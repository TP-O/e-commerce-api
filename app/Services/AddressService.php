<?php

namespace App\Services;

use App\Enums\AddressType;
use App\Models\Address;
use App\Models\Addressable;
use Illuminate\Support\Arr;

class AddressService
{
    /**
     * Create list of address type's ids.
     *
     * @param array $addressTypes
     * @return array
     */
    private function createAddressTypeIds($addressTypes)
    {
        $typeIds = [];

        empty($addressTypes['is_default_address'])
            ?: array_push($typeIds, AddressType::Default);
        empty($addressTypes['is_return_address'])
            ?: array_push($typeIds, AddressType::Return);
        empty($addressTypes['is_pickup_address'])
            ?: array_push($typeIds, AddressType::Pickup);

        return $typeIds;
    }

    /**
     * Bind the address with specific types.
     *
     * @param int $ownerId
     * @param string $ownerModel
     * @param array $addressData
     * @return bool
     */
    private function bindAddressTypes($ownerId, $ownerModel, $addressData)
    {
        $newBinds = empty($addressData['is_new'])
            ? []
            : [[
                'addressable_type' => $ownerModel,
                'addressable_id' => $ownerId,
                'address_id' => $addressData['id'],
                'type_id' => null,
            ]];

        $typeIds = $this->createAddressTypeIds($addressData);

        if (!empty($typeIds)) {
            // Delete the old binds between addresses and their types
            Addressable::where([
                ['addressable_type', $ownerModel],
                ['addressable_id', $ownerId],
            ])
                ->whereIn('type_id', $typeIds)
                ->delete();

            array_push(
                $newBinds,
                ...array_map(function ($typeId) use ($ownerId, $ownerModel, $addressData) {
                    return [
                        'addressable_type' => $ownerModel,
                        'addressable_id' => $ownerId,
                        'address_id' => $addressData['id'],
                        'type_id' => $typeId,
                    ];
                }, $typeIds)
            );
        }

        return Addressable::insert($newBinds);
    }

    /**
     * Create the address.
     *
     * @param int $ownerId
     * @param string $ownerModel
     * @param array $addressData
     * @return \App\Models\Address
     */
    public function create($ownerId, $ownerModel, $addressData)
    {
        $address = Address::create($addressData);

        $this->bindAddressTypes(
            $ownerId,
            $ownerModel,
            [
                ...$addressData,
                'id' => $address->id,
                'is_new' => true,
            ]
        );

        return $address;
    }

    /**
     * Update the address.
     *
     * @param int $ownerId
     * @param string $ownerModel
     * @param int $addressId
     * @param array $addressData
     * @return bool
     */
    public function update($ownerId, $ownerModel, $addressId, $addressData)
    {
        $address = Address::findOrFail($addressId);

        $address->update(Arr::except($addressData, [
            'is_pickup_address',
            'is_return_address',
            'is_default_address',
        ]));

        $this->bindAddressTypes(
            $ownerId,
            $ownerModel,
            [
                ...$addressData,
                'id' => $addressId,
            ]
        );

        return;
    }
}
