import { LoginController } from '@app/controllers/auth/login/login-controller';

class UserLoginController extends LoginController {
  public constructor() {
    super('seller');
  }
}

export default new UserLoginController();
