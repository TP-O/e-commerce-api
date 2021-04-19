import 'reflect-metadata';
import { SellerForgotPasswordService } from '@app/services/auth/password/seller-forgot-password-service';

jest.mock('@app/models/auth/forgot-password', () => {
  return {
    ForgotPassword: {
      select: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      get: jest
        .fn()
        .mockReturnValueOnce({
          data: undefined,
        })
        .mockReturnValueOnce({
          data: {
            first: () => {
              return { id: 1 };
            },
          },
        }),
      create: jest
        .fn()
        .mockReturnValueOnce({ success: false })
        .mockReturnValue({ success: true }),
      delete: jest
        .fn()
        .mockReturnValueOnce({ success: false })
        .mockReturnValue({ success: true }),
    },
  };
});

jest.mock('@app/models/auth/seller', () => {
  return {
    Seller: {
      select: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      get: jest
        .fn()
        .mockReturnValueOnce({
          data: undefined,
        })
        .mockReturnValueOnce({
          data: {
            first: () => {
              return { id: 1 };
            },
          },
        }),
      update: jest
        .fn()
        .mockReturnValueOnce({ success: false })
        .mockReturnValue({ success: true }),
    },
  };
});

describe('Test SellerForgotPasswordService', () => {
  const service = new SellerForgotPasswordService();

  describe('Find the account by something', () => {
    it('Should return undefined', async () => {
      const seller = await service.findAccountBy('email', 'email@gmail.com');

      expect(seller).toBeUndefined();
    });

    it('Should return the account with its ID', async () => {
      const seller = await service.findAccountBy('email', 'email@gmail.com');

      expect(seller).toHaveProperty('id');
    });
  });

  describe('Find the forgot password code', () => {
    it('Should return undefined', async () => {
      const forgotPassword = await service.findForgotPassword('xxx');

      expect(forgotPassword).toBeUndefined();
    });

    it('Should return a forgot password code with its ID', async () => {
      const forgotPassword = await service.findForgotPassword('xxx');

      expect(forgotPassword).toHaveProperty('id');
    });
  });

  describe('Create the forgot password code for account', () => {
    it('Should return the empty string', async () => {
      const code = await service.createForgotPassword(1);

      expect(code.length).toBe(0);
    });

    it('Should return the forgot password code', async () => {
      const code = await service.createForgotPassword(1);

      expect(code.length).toBeGreaterThan(0);
    });
  });

  describe('Delete a forgot password code', () => {
    it('Should return false', async () => {
      const success = await service.deleteForgotPassword('xxx');

      expect(success).toBeFalsy();
    });

    it('Should return true', async () => {
      const success = await service.deleteForgotPassword('xxx');

      expect(success).toBeTruthy();
    });
  });

  describe('Change password of the account', () => {
    it('Should return false', async () => {
      const success = await service.changeAccountPassword(100, 'new password');

      expect(success).toBeFalsy();
    });

    it('Should return true', async () => {
      const success = await service.changeAccountPassword(1, 'new password');

      expect(success).toBeTruthy();
    });
  });
});
