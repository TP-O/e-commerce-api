import 'reflect-metadata';
import { SellerVerifyController } from '@app/controllers/auth';
import { createRequest, createResponse } from 'node-mocks-http';

describe('Test SellerVerifyController', () => {
  const Service = jest.fn().mockImplementation(() => {
    return {
      findActivation: jest
        .fn()
        .mockReturnValueOnce(undefined)
        .mockReturnValue({ id: 1 }),
      deleteActivation: jest
        .fn()
        .mockReturnValueOnce(false)
        .mockReturnValue(true),
      activateAccount: jest
        .fn()
        .mockReturnValueOnce(false)
        .mockReturnValue(true),
    };
  });
  const controller = new SellerVerifyController(new Service());

  describe('Find the activation code', () => {
    it('Should throw the error', async () => {
      let err;

      try {
        await controller.findActivation('xxx');
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return the activation code', async () => {
      const activation = await controller.findActivation('xxx');

      expect(activation).toHaveProperty('id');
    });
  });

  describe('Delete the activation code', () => {
    it('Should throw the error', async () => {
      let err;

      try {
        await controller.deleteActivation('xxx');
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return true', async () => {
      const success = await controller.deleteActivation('xxx');

      expect(success).toBeTruthy();
    });
  });

  describe('Activate the account', () => {
    it('Should throw the error', async () => {
      let err;

      try {
        await controller.activateAccount(1);
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return true', async () => {
      const success = await controller.activateAccount(1);

      expect(success).toBeTruthy();
    });
  });

  describe('Verify the account', () => {
    it('Should throw the error', async () => {
      let err;
      const req = createRequest();
      const res = createResponse();

      try {
        await controller.verify(req, res);
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return response with success true', async () => {
      const req = createRequest({
        params: {
          code: 'xxx',
        },
      });
      const res = createResponse();

      await controller.verify(req, res);

      expect(res.statusCode).toBe(200);
      expect(res._getJSONData().success).toBeTruthy();
    });
  });
});
