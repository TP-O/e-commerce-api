import { users } from '@model/user.model';

class UserService {
  private readonly users = users;

  /**
   * Get list of users.
   */
  public findAll() {
    return this.users;
  }

  /**
   * Find user by id.
   *
   * @param id user id.
   */
  public find(id: any) {
    return this.users.find((user) => user.id == id);
  }
}

export default new UserService();
