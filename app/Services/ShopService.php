<?php

namespace App\Services;

use App\Models\Shop\Banner;
use App\Models\Shop\Shop;
use App\Models\User\Profile;
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
     * @param array $input
     * @return \App\Models\Shop\Shop
     */
    public function create($ownerId, $input)
    {
        $shop = new Shop([
            'id' => $ownerId,
            'name' => $input['name'],
            'slug' => $input['slug'],
        ]);

        $shop->save();

        // Add phone number if doesn't exist
        Profile::where([
            ['user_id', $ownerId],
            ['phone', null],
        ])->update([
            'phone' => $input['phone'],
        ]);

        // Add new pickup address for shop
        $this->addressService->createUserAddress(
            $ownerId,
            [
                ...$input['address'],
                'is_pickup_address' => true,
            ],
        );

        return $shop;
    }

    /**
     * Update the shop.
     *
     * @param int $id
     * @param array $input
     * @return true
     */
    public function update($id, $input)
    {
        $shopInput = Arr::except($input, 'banners');
        $shopBannerInput = $input['banners'];

        empty($shopInput) ?: Shop::where('id', $id)->update($shopInput);

        Banner::where('shop_id', $id)->delete();

        if (!empty($shopBannerInput)) {
            Banner::insert(array_map(
                function ($val) use ($id) {
                    return [
                        'shop_id' => $id,
                        'source' => $val['image'] ?? $val['video'],
                    ];
                },
                $shopBannerInput,
            ));
        }

        return true;
    }
}
