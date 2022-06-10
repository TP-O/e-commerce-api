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
            CREATE OR REPLACE FUNCTION trgieer_update_sold_product_when_order_is_created()
            RETURNS TRIGGER AS
            $$
            BEGIN
                UPDATE products
                    SET sold = sold + NEW.quantity
                WHERE id = NEW.product_id;

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TRIGGER trgieer_update_sold_product_when_order_is_created
            AFTER INSERT ON orders
            FOR EACH ROW
            EXECUTE PROCEDURE trgieer_update_sold_product_when_order_is_created();
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
            DROP TRIGGER IF EXISTS trgieer_update_sold_product_when_order_is_created ON orders;
            DROP FUNCTION IF EXISTS trgieer_update_sold_product_when_order_is_created;
        ');
    }
};
