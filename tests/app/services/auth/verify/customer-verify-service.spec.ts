import 'reflect-metadata';
import { CustomerVerifyService } from '@app/services/auth/verify/customer-verify-service';

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
      delete: jest
        .fn()
        .mockReturnValueOnce({ success: false })
        .mockReturnValue({ success: true }),
    },
  };
});

jest.mock('@app/models/auth/customer', () => {
  return {
    Customer: {
      select: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      get: jest
        .fn()
        .mockReturnValueOnce({
          data: undefined,
        })
        .mockReturnValue({
          data: {
            first: () => {
              return {
                id: 1,
                save: () => {
                  return { success: true };
                },
              };
            },
          },
        }),
    },
  };
});

describe('Test CustomerVerifyService', () => {
  const service = new CustomerVerifyService();

  describe('Find the activation code', () => {
    it('Should return undefined', async () => {
      const activation = await service.findActivation('xxx');

      expect(activation).toBeUndefined();
    });

    it('Should return the activation code with its ID', async () => {
      const activation = await service.findActivation('xxx');

      expect(activation).toHaveProperty('id');
    });
  });

  describe('Delete the activation code', () => {
    it('Should return false', async () => {
      const success = await service.deleteActivation('xxx');

      expect(success).toBeFalsy();
    });

    it('Should return true', async () => {
      const success = await service.deleteActivation('xxx');

      expect(success).toBeTruthy();
    });
  });

  describe('Activate the account', () => {
    it('Should return false', async () => {
      const success = await service.activateAccount(100);

      expect(success).toBeFalsy();
    });

    it('Should return true', async () => {
      const success = await service.activateAccount(1);

      expect(success).toBeTruthy();
    });
  });
});
