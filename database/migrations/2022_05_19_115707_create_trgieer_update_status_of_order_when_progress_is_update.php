<?php

use App\Enums\OrderStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $processing = OrderStatus::Processing->value;

        DB::unprepared("
            CREATE OR REPLACE FUNCTION update_status_of_order_when_progress_is_update()
            RETURNS TRIGGER AS
            $$
            BEGIN
                IF NEW.status_id <> $processing THEN
                    UPDATE orders
                        SET status_id = NEW.status_id
                    WHERE id = NEW.order_id;
                END IF;

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TRIGGER update_status_of_order_when_progress_is_update
            AFTER INSERT ON order_progresses
            FOR EACH ROW
            EXECUTE PROCEDURE update_status_of_order_when_progress_is_update();
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
            DROP TRIGGER IF EXISTS update_status_of_order_when_progress_is_update ON order_progresses;
            DROP FUNCTION IF EXISTS update_status_of_order_when_progress_is_update;
        ');
    }
};
