<?php

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
        DB::unprepared("
            CREATE OR REPLACE FUNCTION update_shop_avatar_to_be_same_as_user()
            RETURNS TRIGGER AS
            $$
            DECLARE
                _user_avatar_image TEXT DEFAULT '';
            BEGIN
                IF TG_OP = 'INSERT' THEN
                    IF NEW.avatar_image = '' THEN
                        SELECT user_profiles.avatar_image INTO _user_avatar_image
                        FROM user_profiles
                        WHERE user_profiles.user_id = NEW.id;

                        IF _user_avatar_image <> '' THEN
                            NEW.avatar_image := _user_avatar_image;
                        END IF;
                    ELSE
                        UPDATE user_profiles
                        SET avatar_image = NEW.avatar_image
                        WHERE user_profiles.user_id = NEW.id;
                    END IF;
                ELSIF TG_OP = 'UPDATE' AND OLD.avatar_image <> NEW.avatar_image THEN
                    UPDATE shops
                    SET avatar_image = NEW.avatar_image
                    WHERE shops.id = OLD.user_id;
                END IF;

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TRIGGER update_shop_avatar_to_be_same_as_user_when_inserting_shop
            BEFORE INSERT ON shops
            FOR EACH ROW
            EXECUTE PROCEDURE update_shop_avatar_to_be_same_as_user();

            CREATE TRIGGER update_shop_avatar_to_be_same_as_user_when_updating_user_profile
            AFTER UPDATE ON user_profiles
            FOR EACH ROW
            EXECUTE PROCEDURE update_shop_avatar_to_be_same_as_user();
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
            DROP TRIGGER IF EXISTS update_shop_avatar_to_be_same_as_user_when_inserting_shop ON shops;
            DROP TRIGGER IF EXISTS update_shop_avatar_to_be_same_as_user_when_updating_user_profile ON user_profiles;
            DROP FUNCTION IF EXISTS update_shop_avatar_to_be_same_as_user;
        ');
    }
};
