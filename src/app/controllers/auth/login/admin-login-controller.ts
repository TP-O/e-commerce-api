import { LoginController } from '@app/controllers/auth/login/login-controller';

class AdminLoginController extends LoginController {
  public constructor() {
    super('admin');
  }
}

export default new AdminLoginController();
