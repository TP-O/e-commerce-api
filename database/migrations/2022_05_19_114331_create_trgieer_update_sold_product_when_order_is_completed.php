<?php

use App\Enums\OrderStatus;
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
        $delivered = OrderStatus::Delivered->value;

        DB::unprepared("
            CREATE OR REPLACE FUNCTION trgieer_update_sold_product_when_order_is_completed()
            RETURNS TRIGGER AS
            $$
            BEGIN
                IF NEW.status_id = $delivered THEN
                    UPDATE products
                        SET sold = sold + NEW.quantity
                    WHERE id = NEW.product_id;
                END IF;

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TRIGGER trgieer_update_sold_product_when_order_is_completed
            AFTER UPDATE ON orders
            FOR EACH ROW
            EXECUTE PROCEDURE trgieer_update_sold_product_when_order_is_completed();
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
            DROP TRIGGER IF EXISTS trgieer_update_sold_product_when_order_is_completed ON orders;
            DROP FUNCTION IF EXISTS trgieer_update_sold_product_when_order_is_completed;
        ');
    }
};
