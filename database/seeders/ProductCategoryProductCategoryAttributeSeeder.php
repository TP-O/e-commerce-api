<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductCategoryProductCategoryAttributeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_category_product_category_attribute')->insert([
            //jean
            [
                'category_id' => 2,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 2,
                'attribute_id' => 2,
                'is_required' => false,
            ],
            [
                'category_id' => 2,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            //hoodies
            [
                'category_id' => 4,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 4,
                'attribute_id' => 2,
                'is_required' => false,
            ],
            [
                'category_id' => 4,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            //Sweatshirts
            [
                'category_id' => 5,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 5,
                'attribute_id' => 2,
                'is_required' => false,
            ],
            [
                'category_id' => 5,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            //other
            [
                'category_id' => 6,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 6,
                'attribute_id' => 2,
                'is_required' => false,
            ],
            [
                'category_id' => 6,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            //Sweaters & Cardigans
            [
                'category_id' => 7,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 7,
                'attribute_id' => 2,
                'is_required' => false,
            ],
            [
                'category_id' => 7,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 7,
                'attribute_id' => 4,
                'is_required' => false,
            ],
            //Suit Sets
            [
                'category_id' => 9,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 9,
                'attribute_id' => 2,
                'is_required' => false,
            ],
            [
                'category_id' => 9,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 9,
                'attribute_id' => 5,
                'is_required' => false,
            ],
            [
                'category_id' => 9,
                'attribute_id' => 6,
                'is_required' => false,
            ],
            //Suit Jackets & Blazers
            [
                'category_id' => 10,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 10,
                'attribute_id' => 2,
                'is_required' => false,
            ],
            [
                'category_id' => 10,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 10,
                'attribute_id' => 5,
                'is_required' => false,
            ],
            [
                'category_id' => 10,
                'attribute_id' => 6,
                'is_required' => false,
            ],
            [
                'category_id' => 10,
                'attribute_id' => 7,
                'is_required' => false,
            ],
            //Suit Pants
            [
                'category_id' => 11,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 11,
                'attribute_id' => 2,
                'is_required' => false,
            ],
            [
                'category_id' => 11,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 11,
                'attribute_id' => 8,
                'is_required' => false,
            ],
            //Suit Vests & Waistcoats
            [
                'category_id' => 12,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 12,
                'attribute_id' => 2,
                'is_required' => false,
            ],
            [
                'category_id' => 12,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            //Paints
            [
                'category_id' => 13,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 13,
                'attribute_id' => 2,
                'is_required' => false,
            ],
            [
                'category_id' => 13,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 13,
                'attribute_id' => 8,
                'is_required' => false,
            ],
            //Shorts
            [
                'category_id' => 14,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 14,
                'attribute_id' => 2,
                'is_required' => false,
            ],
            [
                'category_id' => 14,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 14,
                'attribute_id' => 9,
                'is_required' => false,
            ],
            [
                'category_id' => 14,
                'attribute_id' => 10,
                'is_required' => false,
            ],
            //Underwear
            [
                'category_id' => 16,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 16,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 16,
                'attribute_id' => 11,
                'is_required' => false,
            ],
            //Undershirts
            [
                'category_id' => 17,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 17,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 17,
                'attribute_id' => 12,
                'is_required' => false,
            ],
            //Thermal Innerwear
            [
                'category_id' => 18,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 18,
                'attribute_id' => 2,
                'is_required' => false,
            ],
            [
                'category_id' => 18,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            //Hand Care
            [
                'category_id' => 21,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 21,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 21,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 21,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            //Foot Care
            [
                'category_id' => 22,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 22,
                'attribute_id' => 17,
                'is_required' => false,
            ],
            [
                'category_id' => 22,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 22,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 22,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 22,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            //Nail Care
            [
                'category_id' => 23,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 23,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            //Shampoo
            [
                'category_id' => 25,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 25,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 25,
                'attribute_id' => 18,
                'is_required' => false,
            ],
            [
                'category_id' => 25,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //Hair Color
            [
                'category_id' => 26,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 26,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 26,
                'attribute_id' => 19,
                'is_required' => false,
            ],
            [
                'category_id' => 26,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 26,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 26,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //Hair Treatment
            [
                'category_id' => 27,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 27,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 27,
                'attribute_id' => 19,
                'is_required' => false,
            ],
            [
                'category_id' => 27,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 27,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 27,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //Hair Styling
            [
                'category_id' => 28,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 28,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 28,
                'attribute_id' => 19,
                'is_required' => false,
            ],
            [
                'category_id' => 28,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 28,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 28,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //Bath & Body Care
            [
                'category_id' => 30,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 30,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 30,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 30,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 30,
                'attribute_id' => 18,
                'is_required' => false,
            ],
            [
                'category_id' => 30,
                'attribute_id' => 17,
                'is_required' => false,
            ],
            [
                'category_id' => 30,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            //Skincare
            [
                'category_id' => 31,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 31,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 31,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 31,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            //Hair Care
            [
                'category_id' => 32,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 32,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 32,
                'attribute_id' => 18,
                'is_required' => false,
            ],
            [
                'category_id' => 32,
                'attribute_id' => 19,
                'is_required' => false,
            ],
            [
                'category_id' => 32,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 32,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 32,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            //Perfumes & Fragrance
            [
                'category_id' => 33,
                'attribute_id' => 20,
                'is_required' => false,
            ],
            [
                'category_id' => 33,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 33,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 33,
                'attribute_id' => 21,
                'is_required' => true,
            ],
            [
                'category_id' => 33,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 33,
                'attribute_id' => 22,
                'is_required' => false,
            ],
            [
                'category_id' => 33,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            //Makeup/other
            [
                'category_id' => 35,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 35,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 35,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 35,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //Face
            [
                'category_id' => 36,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 36,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 36,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 36,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 36,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //Eyes
            [
                'category_id' => 37,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 37,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 37,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 37,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //Lips
            [
                'category_id' => 38,
                'attribute_id' => 23,
                'is_required' => false,
            ],
            [
                'category_id' => 38,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 38,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 38,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 38,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 38,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //Makeup Removers
            [
                'category_id' => 39,
                'attribute_id' => 24,
                'is_required' => false,
            ],
            [
                'category_id' => 39,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 39,
                'attribute_id' => 25,
                'is_required' => false,
            ],
            [
                'category_id' => 39,
                'attribute_id' => 26,
                'is_required' => false,
            ],
            [
                'category_id' => 39,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 39,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 39,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            //Makeup Accessories
            [
                'category_id' => 41,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            //Hair Removal Tools
            [
                'category_id' => 42,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 42,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 42,
                'attribute_id' => 24,
                'is_required' => false,
            ],
            [
                'category_id' => 42,
                'attribute_id' => 28,
                'is_required' => false,
            ],
            [
                'category_id' => 42,
                'attribute_id' => 29,
                'is_required' => false,
            ],
            //Facial Cleanser
            [
                'category_id' => 44,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 44,
                'attribute_id' => 18,
                'is_required' => false,
            ],
            [
                'category_id' => 44,
                'attribute_id' => 30,
                'is_required' => false,
            ],
            [
                'category_id' => 44,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 44,
                'attribute_id' => 31,
                'is_required' => false,
            ],
            [
                'category_id' => 44,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 44,
                'attribute_id' => 32,
                'is_required' => false,
            ],
            [
                'category_id' => 44,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 44,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            //Tonner
            [
                'category_id' => 45,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 45,
                'attribute_id' => 25,
                'is_required' => false,
            ],
            [
                'category_id' => 45,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 45,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 45,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 45,
                'attribute_id' => 18,
                'is_required' => false,
            ],
            [
                'category_id' => 45,
                'attribute_id' => 30,
                'is_required' => false,
            ],
            [
                'category_id' => 45,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            //Facial Oil
            [
                'category_id' => 46,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 46,
                'attribute_id' => 25,
                'is_required' => false,
            ],
            [
                'category_id' => 46,
                'attribute_id' => 30,
                'is_required' => false,
            ],
            [
                'category_id' => 46,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 46,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 46,
                'attribute_id' => 18,
                'is_required' => false,
            ],
            [
                'category_id' => 46,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            //Weight Management
            [
                'category_id' => 49,
                'attribute_id' => 21,
                'is_required' => false,
            ],
            [
                'category_id' => 49,
                'attribute_id' => 18,
                'is_required' => false,
            ],
            [
                'category_id' => 49,
                'attribute_id' => 33,
                'is_required' => false,
            ],
            [
                'category_id' => 49,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 49,
                'attribute_id' => 34,
                'is_required' => false,
            ],
            [
                'category_id' => 49,
                'attribute_id' => 35,
                'is_required' => false,
            ],
            [
                'category_id' => 49,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 49,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //Beauty Supplement
            [
                'category_id' => 50,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 50,
                'attribute_id' => 25,
                'is_required' => false,
            ],
            [
                'category_id' => 50,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 50,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 50,
                'attribute_id' => 21,
                'is_required' => false,
            ],
            [
                'category_id' => 50,
                'attribute_id' => 18,
                'is_required' => false,
            ],
            [
                'category_id' => 50,
                'attribute_id' => 33,
                'is_required' => false,
            ],
            //Fitness
            [
                'category_id' => 51,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 51,
                'attribute_id' => 33,
                'is_required' => false,
            ],
            [
                'category_id' => 51,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 51,
                'attribute_id' => 21,
                'is_required' => false,
            ],
            [
                'category_id' => 51,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //Health Monitors & Tests
            [
                'category_id' => 53,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 53,
                'attribute_id' => 36,
                'is_required' => false,
            ],
            [
                'category_id' => 53,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 53,
                'attribute_id' => 38,
                'is_required' => false,
            ],
            //Scale & Body Fat Analyzers
            [
                'category_id' => 54,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 54,
                'attribute_id' => 36,
                'is_required' => false,
            ],
            [
                'category_id' => 54,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 54,
                'attribute_id' => 38,
                'is_required' => false,
            ],
            [
                'category_id' => 54,
                'attribute_id' => 39,
                'is_required' => false,
            ],
            //Eye Care
            [
                'category_id' => 56,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            //Ear Care
            [
                'category_id' => 57,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 57,
                'attribute_id' => 16,
                'is_required' => false,
            ],
            [
                'category_id' => 57,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //Oral Care
            [
                'category_id' => 58,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //Health > Other
            [
                'category_id' => 59,
                'attribute_id' => 15,
                'is_required' => false,
            ],
            [
                'category_id' => 59,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            //TVs
            [
                'category_id' => 62,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 62,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 62,
                'attribute_id' => 40,
                'is_required' => false,
            ],
            [
                'category_id' => 62,
                'attribute_id' => 41,
                'is_required' => false,
            ],
            [
                'category_id' => 62,
                'attribute_id' => 42,
                'is_required' => false,
            ],
            [
                'category_id' => 62,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 62,
                'attribute_id' => 44,
                'is_required' => false,
            ],
            [
                'category_id' => 62,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 62,
                'attribute_id' => 45,
                'is_required' => false,
            ],
            [
                'category_id' => 62,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            //TV Antennas
            [
                'category_id' => 63,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 63,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 63,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 63,
                'attribute_id' => 46,
                'is_required' => false,
            ],
            [
                'category_id' => 63,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            //TV Brackets
            [
                'category_id' => 64,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 64,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 64,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 64,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 64,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            //Kettles
            [
                'category_id' => 66,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 66,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 66,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 66,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 66,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 66,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            //Wine Fridges
            [
                'category_id' => 67,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 67,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 67,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 67,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 67,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 67,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            //Coffee Machine & Accessories
            [
                'category_id' => 68,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 68,
                'attribute_id' => 47,
                'is_required' => false,
            ],
            [
                'category_id' => 68,
                'attribute_id' => 48,
                'is_required' => false,
            ],

            [
                'category_id' => 68,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 68,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 68,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 68,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 68,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            //Mixers
            [
                'category_id' => 69,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 69,
                'attribute_id' => 49,
                'is_required' => false,
            ],
            [
                'category_id' => 69,
                'attribute_id' => 50,
                'is_required' => false,
            ],
            [
                'category_id' => 69,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 69,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 69,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 69,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            //Batteries
            [
                'category_id' => 70,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 70,
                'attribute_id' => 51,
                'is_required' => false,
            ],
            [
                'category_id' => 70,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 70,
                'attribute_id' => 52,
                'is_required' => false,
            ],
            [
                'category_id' => 70,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            //Remote Controls
            [
                'category_id' => 71,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 71,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 71,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            //Sim Cards
            [
                'category_id' => 73,
                'attribute_id' => 53,
                'is_required' => false,
            ],
            [
                'category_id' => 73,
                'attribute_id' => 54,
                'is_required' => false,
            ],
            //Tablets
            [
                'category_id' => 74,
                'attribute_id' => 52,
                'is_required' => false,
            ],
            [
                'category_id' => 74,
                'attribute_id' => 55,
                'is_required' => false,
            ],
            [
                'category_id' => 74,
                'attribute_id' => 56,
                'is_required' => false,
            ],
            [
                'category_id' => 74,
                'attribute_id' => 57,
                'is_required' => false,
            ],
            [
                'category_id' => 74,
                'attribute_id' => 58,
                'is_required' => false,
            ],
            [
                'category_id' => 74,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 74,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 74,
                'attribute_id' => 59,
                'is_required' => false,
            ],
            [
                'category_id' => 74,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            //Mobiles Phones
            [
                'category_id' => 75,
                'attribute_id' => 52,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 60,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 61,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 62,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 63,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 64,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 65,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 55,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 66,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 59,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 67,
                'is_required' => false,
            ],
            [
                'category_id' => 75,
                'attribute_id' => 44,
                'is_required' => false,
            ],
            //VR Devices
            [
                'category_id' => 77,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 77,
                'attribute_id' => 68,
                'is_required' => false,
            ],
            [
                'category_id' => 77,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 77,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 77,
                'attribute_id' => 63,
                'is_required' => false,
            ],
            //GPS Trackers
            [
                'category_id' => 78,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 78,
                'attribute_id' => 63,
                'is_required' => false,
            ],
            [
                'category_id' => 78,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 78,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            //Mobile Flashes & Selfie Lights
            [
                'category_id' => 80,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 80,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            //USB & Mobile Fans
            [
                'category_id' => 81,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 81,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 81,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            //Phone Grips
            [
                'category_id' => 82,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            //Memory Card
            [
                'category_id' => 83,
                'attribute_id' => 55,
                'is_required' => false,
            ],
            [
                'category_id' => 83,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 83,
                'attribute_id' => 69,
                'is_required' => false,
            ],
            //Screen Protector
            [
                'category_id' => 84,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 84,
                'attribute_id' => 66,
                'is_required' => false,
            ],
            [
                'category_id' => 84,
                'attribute_id' => 70,
                'is_required' => false,
            ],
            [
                'category_id' => 84,
                'attribute_id' => 71,
                'is_required' => true,
            ],
            [
                'category_id' => 84,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 84,
                'attribute_id' => 72,
                'is_required' => false,
            ],
            //EarPhones, Headphones & Headsets
            [
                'category_id' => 86,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 86,
                'attribute_id' => 73,
                'is_required' => false,
            ],
            [
                'category_id' => 86,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 86,
                'attribute_id' => 74,
                'is_required' => false,
            ],
            //MP3 & MP4 Players
            [
                'category_id' => 88,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 88,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 88,
                'attribute_id' => 55,
                'is_required' => false,
            ],
            //CD, DVD, & Blu-ray Players
            [
                'category_id' => 89,
                'attribute_id' => 75,
                'is_required' => false,
            ],
            [
                'category_id' => 89,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 89,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            //Voice Recorders
            [
                'category_id' => 90,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 90,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 90,
                'attribute_id' => 55,
                'is_required' => false,
            ],
            //Radio & Cassette Players
            [
                'category_id' => 91,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 91,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            //Microphone
            [
                'category_id' => 92,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 92,
                'attribute_id' => 74,
                'is_required' => false,
            ],
            [
                'category_id' => 92,
                'attribute_id' => 76,
                'is_required' => false,
            ],
            [
                'category_id' => 92,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 92,
                'attribute_id' => 73,
                'is_required' => true,
            ],
            [
                'category_id' => 92,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 92,
                'attribute_id' => 77,
                'is_required' => false,
            ],
            //Amplifiers & Mixers
            [
                'category_id' => 93,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 93,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 93,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 93,
                'attribute_id' => 78,
                'is_required' => false,
            ],
            //Speakers
            [
                'category_id' => 95,
                'attribute_id' => 75,
                'is_required' => false,
            ],
            [
                'category_id' => 95,
                'attribute_id' => 78,
                'is_required' => false,
            ],
            [
                'category_id' => 95,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 95,
                'attribute_id' => 73,
                'is_required' => true,
            ],
            [
                'category_id' => 95,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 95,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 95,
                'attribute_id' => 74,
                'is_required' => false,
            ],
            //AV Receivers
            [
                'category_id' => 96,
                'attribute_id' => 75,
                'is_required' => false,
            ],
            [
                'category_id' => 96,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 96,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 96,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            //Dog Food
            [
                'category_id' => 99,
                'attribute_id' => 35,
                'is_required' => false,
            ],
            [
                'category_id' => 99,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 99,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 99,
                'attribute_id' => 79,
                'is_required' => false,
            ],
            [
                'category_id' => 99,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            //Cat Food
            [
                'category_id' => 100,
                'attribute_id' => 35,
                'is_required' => false,
            ],
            [
                'category_id' => 100,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 100,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 100,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            //Bird feed
            [
                'category_id' => 101,
                'attribute_id' => 80,
                'is_required' => false,
            ],
            [
                'category_id' => 101,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 101,
                'attribute_id' => 13,
                'is_required' => false,
            ],
            [
                'category_id' => 101,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            //Bowls & Feeders
            [
                'category_id' => 103,
                'attribute_id' => 81,
                'is_required' => false,
            ],
            [
                'category_id' => 103,
                'attribute_id' => 3,
                'is_required' => false,
            ],
            [
                'category_id' => 103,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            //Leashes, Collars & Harnesses
            [
                'category_id' => 104,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 104,
                'attribute_id' => 82,
                'is_required' => false,
            ],
            //Pet Clothing
            [
                'category_id' => 106,
                'attribute_id' => 83,
                'is_required' => false,
            ],
            [
                'category_id' => 106,
                'attribute_id' => 79,
                'is_required' => false,
            ],
            [
                'category_id' => 106,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            //Boots, Socks & Paw Protectors
            [
                'category_id' => 107,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 107,
                'attribute_id' => 79,
                'is_required' => false,
            ],
            //Hats
            [
                'category_id' => 108,
                'attribute_id' => 79,
                'is_required' => false,
            ],
            //Playstation
            [
                'category_id' => 111,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 111,
                'attribute_id' => 84,
                'is_required' => false,
            ],
            [
                'category_id' => 111,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 111,
                'attribute_id' => 85,
                'is_required' => false,
            ],
            //Xbox
            [
                'category_id' => 112,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 112,
                'attribute_id' => 85,
                'is_required' => false,
            ],
            [
                'category_id' => 112,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 112,
                'attribute_id' => 86,
                'is_required' => false,
            ],
            //Nintendo DS
            [
                'category_id' => 113,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 113,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 113,
                'attribute_id' => 87,
                'is_required' => false,
            ],
            //Console Accessories
            [
                'category_id' => 114,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 114,
                'attribute_id' => 88,
                'is_required' => false,
            ],
            [
                'category_id' => 114,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 114,
                'attribute_id' => 89,
                'is_required' => false,
            ],
            [
                'category_id' => 114,
                'attribute_id' => 90,
                'is_required' => false,
            ],
            //Video Games > Playstation
            [
                'category_id' => 116,
                'attribute_id' => 91,
                'is_required' => false,
            ],
            [
                'category_id' => 116,
                'attribute_id' => 92,
                'is_required' => false,
            ],
            //Video Games > Xbox
            [
                'category_id' => 117,
                'attribute_id' => 91,
                'is_required' => false,
            ],
            [
                'category_id' => 117,
                'attribute_id' => 92,
                'is_required' => false,
            ],
            //Video Games > Nintendo DS
            [
                'category_id' => 118,
                'attribute_id' => 91,
                'is_required' => false,
            ],
            [
                'category_id' => 118,
                'attribute_id' => 92,
                'is_required' => false,
            ],
            //Video Games > PC Game
            [
                'category_id' => 119,
                'attribute_id' => 91,
                'is_required' => false,
            ],
            [
                'category_id' => 119,
                'attribute_id' => 92,
                'is_required' => false,
            ],
            [
                'category_id' => 119,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            //Pens & Inks
            [
                'category_id' => 122,
                'attribute_id' => 93,
                'is_required' => false,
            ],
            [
                'category_id' => 122,
                'attribute_id' => 94,
                'is_required' => false,
            ],
            [
                'category_id' => 122,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 122,
                'attribute_id' => 95,
                'is_required' => false,
            ],
            //Pencils
            [
                'category_id' => 123,
                'attribute_id' => 96,
                'is_required' => false,
            ],
            [
                'category_id' => 123,
                'attribute_id' => 97,
                'is_required' => false,
            ],
            [
                'category_id' => 123,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 123,
                'attribute_id' => 93,
                'is_required' => false,
            ],
            //Eraser & Correction Supplies
            [
                'category_id' => 124,
                'attribute_id' => 98,
                'is_required' => false,
            ],
            //Highlighters
            [
                'category_id' => 125,
                'attribute_id' => 93,
                'is_required' => false,
            ],
            //Calculator
            [
                'category_id' => 127,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 127,
                'attribute_id' => 99,
                'is_required' => false,
            ],
            [
                'category_id' => 127,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            //Clips, Pins & Tasks
            [
                'category_id' => 128,
                'attribute_id' => 100,
                'is_required' => false,
            ],
            //Rulers, Protractors & Stencils
            [
                'category_id' => 129,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 129,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 129,
                'attribute_id' => 101,
                'is_required' => false,
            ],
            //Bookmarks
            [
                'category_id' => 131,
                'attribute_id' => 103,
                'is_required' => false,
            ],
            [
                'category_id' => 131,
                'attribute_id' => 101,
                'is_required' => false,
            ],
            [
                'category_id' => 131,
                'attribute_id' => 102,
                'is_required' => false,
            ],
            //Printing & Photocopy Paper
            [
                'category_id' => 132,
                'attribute_id' => 104,
                'is_required' => false,
            ],
            [
                'category_id' => 132,
                'attribute_id' => 103,
                'is_required' => false,
            ],
            [
                'category_id' => 132,
                'attribute_id' => 105,
                'is_required' => false,
            ],
            //Memo & Sticky Notes
            [
                'category_id' => 133,
                'attribute_id' => 103,
                'is_required' => false,
            ],
            [
                'category_id' => 133,
                'attribute_id' => 101,
                'is_required' => false,
            ],
            [
                'category_id' => 133,
                'attribute_id' => 102,
                'is_required' => false,
            ],
            //Desktop PC
            [
                'category_id' => 136,
                'attribute_id' => 106,
                'is_required' => false,
            ],
            [
                'category_id' => 136,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 136,
                'attribute_id' => 60,
                'is_required' => false,
            ],
            [
                'category_id' => 136,
                'attribute_id' => 107,
                'is_required' => false,
            ],
            [
                'category_id' => 136,
                'attribute_id' => 55,
                'is_required' => false,
            ],
            [
                'category_id' => 136,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 136,
                'attribute_id' => 108,
                'is_required' => true,
            ],
            [
                'category_id' => 136,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 136,
                'attribute_id' => 109,
                'is_required' => false,
            ],
            [
                'category_id' => 136,
                'attribute_id' => 110,
                'is_required' => false,
            ],
            [
                'category_id' => 136,
                'attribute_id' => 65,
                'is_required' => false,
            ],
            [
                'category_id' => 136,
                'attribute_id' => 111,
                'is_required' => false,
            ],
            //Mini PC
            [
                'category_id' => 137,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 137,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 137,
                'attribute_id' => 109,
                'is_required' => false,
            ],
            [
                'category_id' => 137,
                'attribute_id' => 107,
                'is_required' => false,
            ],
            [
                'category_id' => 137,
                'attribute_id' => 55,
                'is_required' => false,
            ],
            [
                'category_id' => 137,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 137,
                'attribute_id' => 106,
                'is_required' => false,
            ],
            [
                'category_id' => 137,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 137,
                'attribute_id' => 60,
                'is_required' => false,
            ],
            [
                'category_id' => 137,
                'attribute_id' => 110,
                'is_required' => false,
            ],
            [
                'category_id' => 137,
                'attribute_id' => 65,
                'is_required' => false,
            ],
            [
                'category_id' => 137,
                'attribute_id' => 111,
                'is_required' => false,
            ],
            //Server PC
            [
                'category_id' => 138,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 138,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 138,
                'attribute_id' => 109,
                'is_required' => false,
            ],
            [
                'category_id' => 138,
                'attribute_id' => 107,
                'is_required' => false,
            ],
            [
                'category_id' => 138,
                'attribute_id' => 55,
                'is_required' => false,
            ],
            [
                'category_id' => 138,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 138,
                'attribute_id' => 106,
                'is_required' => false,
            ],
            [
                'category_id' => 138,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 138,
                'attribute_id' => 60,
                'is_required' => false,
            ],
            [
                'category_id' => 138,
                'attribute_id' => 110,
                'is_required' => false,
            ],
            [
                'category_id' => 138,
                'attribute_id' => 65,
                'is_required' => false,
            ],
            [
                'category_id' => 138,
                'attribute_id' => 111,
                'is_required' => false,
            ],
            //Monitors
            [
                'category_id' => 139,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 139,
                'attribute_id' => 41,
                'is_required' => false,
            ],
            [
                'category_id' => 139,
                'attribute_id' => 112,
                'is_required' => false,
            ],
            [
                'category_id' => 139,
                'attribute_id' => 113,
                'is_required' => false,
            ],
            [
                'category_id' => 139,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 139,
                'attribute_id' => 108,
                'is_required' => true,
            ],
            [
                'category_id' => 139,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 139,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 139,
                'attribute_id' => 114,
                'is_required' => false,
            ],
            [
                'category_id' => 139,
                'attribute_id' => 60,
                'is_required' => false,
            ],
            [
                'category_id' => 139,
                'attribute_id' => 115,
                'is_required' => false,
            ],
            //Fans & Heatsinks
            [
                'category_id' => 141,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 141,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 141,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 141,
                'attribute_id' => 116,
                'is_required' => false,
            ],
            //Processors
            [
                'category_id' => 142,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 142,
                'attribute_id' => 110,
                'is_required' => false,
            ],
            [
                'category_id' => 142,
                'attribute_id' => 111,
                'is_required' => false,
            ],
            [
                'category_id' => 142,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 142,
                'attribute_id' => 117,
                'is_required' => false,
            ],
            [
                'category_id' => 142,
                'attribute_id' => 65,
                'is_required' => false,
            ],
            [
                'category_id' => 142,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            //Graphics Cards
            [
                'category_id' => 143,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 143,
                'attribute_id' => 118,
                'is_required' => false,
            ],
            [
                'category_id' => 143,
                'attribute_id' => 119,
                'is_required' => false,
            ],
            [
                'category_id' => 143,
                'attribute_id' => 120,
                'is_required' => false,
            ],
            [
                'category_id' => 143,
                'attribute_id' => 121,
                'is_required' => false,
            ],
            [
                'category_id' => 143,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 143,
                'attribute_id' => 122,
                'is_required' => false,
            ],
            [
                'category_id' => 143,
                'attribute_id' => 123,
                'is_required' => false,
            ],
            [
                'category_id' => 143,
                'attribute_id' => 107,
                'is_required' => false,
            ],
            [
                'category_id' => 143,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            //RAM
            [
                'category_id' => 144,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 144,
                'attribute_id' => 124,
                'is_required' => false,
            ],
            [
                'category_id' => 144,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 144,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 144,
                'attribute_id' => 123,
                'is_required' => false,
            ],
            [
                'category_id' => 144,
                'attribute_id' => 61,
                'is_required' => false,
            ],
            //PC Cases
            [
                'category_id' => 145,
                'attribute_id' => 1,
                'is_required' => false,
            ],
            [
                'category_id' => 145,
                'attribute_id' => 125,
                'is_required' => false,
            ],
            [
                'category_id' => 145,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 145,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 145,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 145,
                'attribute_id' => 126,
                'is_required' => false,
            ],
            //Hard Drives
            [
                'category_id' => 147,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 147,
                'attribute_id' => 127,
                'is_required' => false,
            ],
            [
                'category_id' => 147,
                'attribute_id' => 55,
                'is_required' => false,
            ],
            [
                'category_id' => 147,
                'attribute_id' => 126,
                'is_required' => false,
            ],
            [
                'category_id' => 147,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 147,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 147,
                'attribute_id' => 124,
                'is_required' => false,
            ],
            [
                'category_id' => 147,
                'attribute_id' => 128,
                'is_required' => false,
            ],
            //SSD
            [
                'category_id' => 148,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 148,
                'attribute_id' => 124,
                'is_required' => false,
            ],
            [
                'category_id' => 148,
                'attribute_id' => 129,
                'is_required' => false,
            ],
            [
                'category_id' => 148,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 148,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 148,
                'attribute_id' => 127,
                'is_required' => false,
            ],
            [
                'category_id' => 148,
                'attribute_id' => 107,
                'is_required' => false,
            ],
            [
                'category_id' => 148,
                'attribute_id' => 55,
                'is_required' => false,
            ],
            //Hard Disk Casing & Docking
            [
                'category_id' => 149,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 149,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 149,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 149,
                'attribute_id' => 130,
                'is_required' => false,
            ],
            //Mice
            [
                'category_id' => 151,
                'attribute_id' => 73,
                'is_required' => true,
            ],
            [
                'category_id' => 151,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 151,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            [
                'category_id' => 151,
                'attribute_id' => 108,
                'is_required' => true,
            ],
            [
                'category_id' => 151,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 151,
                'attribute_id' => 131,
                'is_required' => false,
            ],
            //Keyboards
            [
                'category_id' => 152,
                'attribute_id' => 73,
                'is_required' => true,
            ],
            [
                'category_id' => 152,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 152,
                'attribute_id' => 132,
                'is_required' => false,
            ],
            [
                'category_id' => 152,
                'attribute_id' => 108,
                'is_required' => true,
            ],
            [
                'category_id' => 152,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 152,
                'attribute_id' => 131,
                'is_required' => false,
            ],
            [
                'category_id' => 152,
                'attribute_id' => 43,
                'is_required' => false,
            ],
            //Laptops
            [
                'category_id' => 153,
                'attribute_id' => 106,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 37,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 27,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 133,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 63,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 134,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 110,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 65,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 111,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 135,
                'is_required' => true,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 14,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 52,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 119,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 61,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 115,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 107,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 55,
                'is_required' => false,
            ],
            [
                'category_id' => 153,
                'attribute_id' => 43,
                'is_required' => false,
            ],
        ]);
    }
}
