<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared("
            CREATE OR REPLACE FUNCTION autofill_in_shop_and_product_id_in_cart_items()
            RETURNS TRIGGER AS
            $$
            DECLARE
                product_id int;
                shop_id int;
            BEGIN
                SELECT product_models.product_id INTO product_id FROM product_models WHERE id = NEW.product_model_id;
                SELECT products.shop_id INTO shop_id FROM products WHERE id = product_id;

                NEW.product_id := product_id;
                NEW.shop_id := shop_id;

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TRIGGER autofill_in_shop_and_product_id_in_cart_items
            BEFORE INSERT ON cart_items
            FOR EACH ROW
            EXECUTE PROCEDURE autofill_in_shop_and_product_id_in_cart_items();
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('
            DROP TRIGGER IF EXISTS autofill_in_shop_and_product_id_in_cart_items ON cart_items;
            DROP FUNCTION IF EXISTS autofill_in_shop_and_product_id_in_cart_items;
        ');
    }
};
