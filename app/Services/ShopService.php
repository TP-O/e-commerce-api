<?php

namespace App\Services;

use App\Enums\ResourceType;
use App\Models\Shop\Shop;
use App\Models\Account\User\Profile;
use App\Models\Account\User\User;
use Illuminate\Support\Arr;

class ShopService
{
    private AddressService $addressService;

    public function __construct(AddressService $addressService)
    {
        $this->addressService = $addressService;
    }

    /**
     * Create a shop for the user.
     *
     * @param int $ownerId
     * @param array $shopData
     * @return \App\Models\Shop\Shop
     */
    public function create($ownerId, $shopData)
    {
        $shop = Shop::create([
            'id' => $ownerId,
            'name' => $shopData['name'],
            'slug' => $shopData['slug'],
        ]);

        // Add phone number if doesn't exist
        Profile::where([
            ['user_id', $ownerId],
            ['phone', null],
        ])->update([
            'phone' => $shopData['phone'],
        ]);

        // Update this address to pickup address
        if (isset($shopData['address']['id'])) {
            $this->addressService->update(
                $ownerId,
                User::class,
                $shopData['address']['id'],
                [
                    'is_pickup_address' => true,
                ],
            );
        }
        // Add new pickup address for shop
        else {
            $this->addressService->create(
                $ownerId,
                User::class,
                [
                    ...$shopData['address'],
                    'is_pickup_address' => true,
                ],
            );
        }

        return $shop;
    }

    /**
     * Update the shop.
     *
     * @param int $id
     * @param array $shopData
     * @return true
     */
    public function update($id, $shopData)
    {
        $shopData['banners'] = array_map(
            function ($banner) {
                return isset($banner['image'])
                    ? [
                        'type' => ResourceType::Image,
                        ...Arr::only(
                            $banner['image'],
                            ['id', 'hyper_link'],
                        ),
                    ]
                    : [
                        'type' => ResourceType::Video,
                        'source' => $banner['video']
                    ];
            },
            $shopData['banners']
        );

        Shop::where('id', $id)->update($shopData);

        return true;
    }
}
