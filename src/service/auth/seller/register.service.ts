import bcrypt from 'bcrypt';
import { Database } from '@database/core';
import { Seller } from '@model/auth/seller.model';
import { Role } from '@model/auth/role.model';

class RegisterService {
  /**
   * Register seller account.
   *
   * @param value seller information.
   */
  public async registerAccount(value: any) {
    const { success } = await Seller.create([
      {
        name: value.name,
        email: value.email,
        password: bcrypt.hashSync(value.password, 10),
      },
    ]);

    return success;
  }

  /**
   * Assign a role to the seller account.
   *
   * @param sellerId ID's seller.
   * @param roleId ID's role.
   */
  public async assignRole(sellerId: string, roleId: string) {
    const { error } = await Database.raw(
      `INSERT INTO roles_sellers (role_id, seller_id) VALUES (${roleId}, ${sellerId})`,
    );

    return error;
  }

  /**
   * Find role by name.
   *
   * @param name role's name.
   */
  public async findRoleByName(name: string) {
    const { data } = await Role.select('id')
      .where([['name', '=', `v:${name}`]])
      .get();

    return data?.first();
  }

  /**
   * Find the seller by email.
   *
   * @param email seller's email.
   */
  public async findSellerByEmail(email: string) {
    const { data } = await Seller.select('id')
      .where([['email', '=', `v:${email}`]])
      .get();

    return data?.first();
  }
}

export default new RegisterService();