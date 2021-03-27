import { HttpRequestError } from 'exception/http-request-error';
import { User } from 'model/user.model';

class UserService {
  /**
   * Get list of users.
   */
  public async findAll() {
    const { data } = await User.select('*').with('products', 'roles').get();

    return { data };
  }

  /**
   * Find user by id.
   *
   * @param id user id.
   */
  public async findOne(id: any) {
    const { data } = await User.select('*')
      .with('products', 'roles')
      .where([['users.id', '=', `v:${id}`]])
      .get();

    if (!data?.count()) {
      throw new HttpRequestError(404, 'User not found!');
    }

    return { data: data?.first() };
  }

  /**
   * Create user.
   *
   * @param data user data.
   */
  public async create(data: any) {
    const { success } = await User.create(data);

    return { success };
  }

  /**
   * Update user.
   *
   * @param id user id.
   * @param data new user data.
   */
  public async update(id: any, newData: any) {
    const { data } = await this.findOne(id);

    data.name = newData.name;
    data.password = newData.password;
    const { success } = await data.update();

    return { success };
  }

  /**
   * Delete user.
   *
   * @param id user id.
   */
  public async delete(id: any) {
    const { data } = await this.findOne(id);

    const { success } = await data.delete();

    return { success };
  }
}

export default new UserService();
