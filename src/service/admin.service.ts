import { HttpRequestError } from '@exception/http-request-error';
import { Admin } from '@model/admin.model';

class AdminService {
  /**
   * Get list of admins.
   */
  public async findAll() {
    const { data } = await Admin.select('*').with('roles', 'permissions').get();

    return { data };
  }

  /**
   * Find user by id.
   *
   * @param id admin id.
   */
  public async findOne(id: any) {
    const { data } = await Admin.select('*')
      .with('roles', 'permissions')
      .where([['admins.id', '=', `v:${id}`]])
      .get();

    if (!data?.count()) {
      throw new HttpRequestError(404, 'Admin not found!');
    }

    return { data: data?.first() };
  }

  /**
   * Create admin.
   *
   * @param data user data.
   */
  public async create(data: any) {
    const { success } = await Admin.create([data]);

    return { success };
  }

  /**
   * Update admin.
   *
   * @param id admin id.
   * @param data new admin data.
   */
  public async update(id: any, newData: any) {
    const { data } = await this.findOne(id);

    data.name = newData.name;
    data.email = newData.email;
    data.password = newData.password;
    const { success } = await data.save();

    return { success };
  }

  /**
   * Delete admin.
   *
   * @param id user id.
   */
  public async delete(id: any) {
    const { data } = await this.findOne(id);

    const { success } = await data.delete();

    return { success };
  }
}

export default new AdminService();
