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
            CREATE OR REPLACE FUNCTION update_user_avatar_to_be_same_as_shop()
            RETURNS TRIGGER AS
            $$
            BEGIN
                IF OLD.avatar_image <> NEW.avatar_image THEN
                    UPDATE user_profiles
                    SET avatar_image = NEW.avatar_image
                    WHERE user_profiles.user_id = OLD.id;
                END IF;

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TRIGGER update_user_avatar_to_be_same_as_shop
            AFTER UPDATE ON shops
            FOR EACH ROW
            EXECUTE PROCEDURE update_user_avatar_to_be_same_as_shop();
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
            DROP TRIGGER IF EXISTS update_user_avatar_to_be_same_as_shop ON shops;
            DROP FUNCTION IF EXISTS update_user_avatar_to_be_same_as_shop;
        ');
    }
};
