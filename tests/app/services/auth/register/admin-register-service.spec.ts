import 'reflect-metadata';
import { AdminRegisterService } from '@app/services/auth/register/admin-register-service';

jest.mock('@app/models/auth/activation', () => {
  return {
    Activation: {
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
    },
  };
});

jest.mock('@app/models/auth/role', () => {
  return {
    Role: {
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
    },
  };
});

jest.mock('@app/models/auth/admin', () => {
  return {
    Admin: {
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
    },
  };
});

jest.mock('@app/models/auth/admin-role', () => {
  return {
    AdminRole: {
      create: jest
        .fn()
        .mockReturnValueOnce({ success: false })
        .mockReturnValue({ success: true }),
    },
  };
});

describe('Test AdminRegisterService', () => {
  const service = new AdminRegisterService();

  describe('Register the account', () => {
    it('Should return false', async () => {
      const success = await service.registerAccount({
        name: 'name',
        email: 'email@gmail.com',
        password: 'password',
      });

      expect(success).toBeFalsy();
    });

    it('Should return true', async () => {
      const success = await service.registerAccount({
        name: 'name',
        email: 'email@gmail.com',
        password: 'password',
      });

      expect(success).toBeTruthy();
    });
  });

  describe('Find role by name', () => {
    it('Should return undefined', async () => {
      const role = await service.findRoleByName('role');

      expect(role).toBeUndefined();
    });

    it('Should return a role with its ID', async () => {
      const role = await service.findRoleByName('role');

      expect(role).toHaveProperty('id');
    });
  });

  describe('Find the account by email', () => {
    it('Should return undefined', async () => {
      const account = await service.findAccountByEmail('email@gmail.com');

      expect(account).toBeUndefined();
    });

    it('Should return the account with its ID', async () => {
      const account = await service.findAccountByEmail('email@gmail.com');

      expect(account).toHaveProperty('id');
    });
  });

  describe('Create the activation code for the account', () => {
    it('Should return a empty string', async () => {
      const code = await service.createActivationCode(-1);

      expect(code.length).toBe(0);
    });

    it('Should return the activation code', async () => {
      const code = await service.createActivationCode(1);

      expect(code.length).toBeGreaterThan(0);
    });
  });

  describe('Assign a role to the account', () => {
    it('Should return false', async () => {
      const success = await service.assign(1, 1);

      expect(success).toBeFalsy();
    });

    it('Should return true', async () => {
      const success = await service.assign(1, 2);

      expect(success).toBeTruthy();
    });
  });
});
