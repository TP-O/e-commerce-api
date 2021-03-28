import { HttpRequestError } from '@exception/http-request-error';
import { Salesman } from '@model/salesman.model';

class SalesmanService {
  /**
   * Get list of admins.
   */
  public async findAll() {
    const { data } = await Salesman.select('*').with('roles', 'permissions').get();

    return { data };
  }

  /**
   * Find user by id.
   *
   * @param id admin id.
   */
  public async findOne(id: any) {
    const { data } = await Salesman.select('*')
      .with('roles', 'permissions')
      .where([['salesmans.id', '=', `v:${id}`]])
      .get();

    if (!data?.count()) {
      throw new HttpRequestError(404, 'Salesman not found!');
    }

    return { data: data?.first() };
  }

  /**
   * Create salesman.
   *
   * @param data user data.
   */
  public async create(data: any) {
    const { success } = await Salesman.create([data]);

    return { success };
  }

  /**
   * Update salesman.
   *
   * @param id salesman id.
   * @param data new salesman data.
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
   * Delete salesman.
   *
   * @param id salesman id.
   */
  public async delete(id: any) {
    const { data } = await this.findOne(id);

    const { success } = await data.delete();

    return { success };
  }
}

export default new SalesmanService();
