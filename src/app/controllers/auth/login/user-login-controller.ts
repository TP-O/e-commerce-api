import { LoginController } from '@app/controllers/auth/login/login-controller';

class UserLoginController extends LoginController {
  public constructor() {
    super('default');
  }
}

export default new UserLoginController();
