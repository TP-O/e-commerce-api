import 'reflect-metadata';
import { AdminLoginService } from '@app/services/auth/login/admin-login-service';

const validate = jest
  .fn()
  .mockReturnValueOnce({ success: false })
  .mockReturnValue({
    success: true,
    accessToken: 'xxx',
    refreshToken: 'xxx',
  });
const refresh = jest
  .fn()
  .mockReturnValueOnce({ success: false })
  .mockReturnValue({
    success: true,
    accessToken: 'xxx',
    refreshToken: 'xxx',
  });
jest.mock('@modules/helper', () => {
  return {
    auth: () => {
      return { validate, refresh };
    },
  };
});

describe('Test UserLoginService', () => {
  const service = new AdminLoginService();

  describe('Valdaite credentials', () => {
    it('Should return with success is false', async () => {
      const { success } = await service.validate({
        email: 'email@gmail.com',
        password: 'password',
      });

      expect(success).toBeFalsy();
    });

    it('Should return with the tokens', async () => {
      const { accessToken, refreshToken } = await service.validate({
        email: 'email@gmail.com',
        password: 'password',
      });

      expect(accessToken).not.toBeUndefined();
      expect(refreshToken).not.toBeUndefined();
    });
  });

  describe('Get new tokens', () => {
    it('Should return with success is false', async () => {
      const { success } = await service.refresh('xxx');

      expect(success).toBeFalsy();
    });

    it('Should return with the new tokens', async () => {
      const { accessToken, refreshToken } = await service.refresh('xxx');

      expect(accessToken).not.toBeUndefined();
      expect(refreshToken).not.toBeUndefined();
    });
  });
});
