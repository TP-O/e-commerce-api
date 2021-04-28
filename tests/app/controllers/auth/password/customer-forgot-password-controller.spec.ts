import 'reflect-metadata';
import { CustomerForgotPasswordController } from '@app/controllers/auth';
import { createRequest, createResponse } from 'node-mocks-http';

describe('Test CustomerForgotPasswordController', () => {
  const Service = jest.fn().mockImplementation(() => {
    return {
      findAccountBy: jest
        .fn()
        .mockReturnValueOnce(undefined)
        .mockReturnValue({ id: 1 }),
      findForgotPassword: jest
        .fn()
        .mockReturnValueOnce(undefined)
        .mockReturnValue({ id: 1 }),
      createForgotPassword: jest
        .fn()
        .mockReturnValueOnce('')
        .mockReturnValue('xxx'),
      deleteForgotPassword: jest
        .fn()
        .mockReturnValueOnce(false)
        .mockReturnValue(true),
      changeAccountPassword: jest
        .fn()
        .mockReturnValueOnce(false)
        .mockReturnValue(true),
      sendEmail: jest.fn(),
    };
  });
  const Validator = jest.fn().mockImplementation(() => {
    return {
      validate: (input: any) => input,
    };
  });
  const controller = new CustomerForgotPasswordController(
    new Service(),
    new Validator(),
    new Validator(),
  );

  describe('Find the account by something', () => {
    it('Should throw the error', async () => {
      let err;

      try {
        await controller.findAccountBy('email', 'xxx@gmail.com');
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return the account', async () => {
      const account = await controller.findAccountBy('email', 'xxx@gmail.com');

      expect(account).toHaveProperty('id');
    });
  });

  describe('Find the forgot password code', () => {
    it('Should throw the error', async () => {
      let err;

      try {
        await controller.findForgotPassword('xxx');
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return the forgot password code', async () => {
      const forgotPassword = await controller.findForgotPassword('xxx');

      expect(forgotPassword).toHaveProperty('id');
    });
  });

  describe('Create the forgot password code for the account', () => {
    it('Should throw the error', async () => {
      let err;

      try {
        await controller.createForgotPassword(1);
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return the forgot password code', async () => {
      const code = await controller.createForgotPassword(1);

      expect(code.length).toBeGreaterThan(0);
    });
  });

  describe('Delete the forgot password code', () => {
    it('Should throw the error', async () => {
      let err;

      try {
        await controller.deleteForgotPassword('xxx');
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return true', async () => {
      const success = await controller.deleteForgotPassword('xxx');

      expect(success).toBeTruthy();
    });
  });

  describe('Change the password of the account', () => {
    it('Should throw the error', async () => {
      let err;

      try {
        await controller.changeAccountPassword(1, 'xxx');
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return true', async () => {
      const success = await controller.changeAccountPassword(1, 'xxx');

      expect(success).toBeTruthy();
    });
  });

  describe('Send reset password link to the email', () => {
    it('Should return response with success is true', async () => {
      const req = createRequest();
      const res = createResponse();

      await controller.forgotPassword(req, res);

      expect(res.statusCode).toBe(200);
      expect(res._getJSONData().success).toBeTruthy();
    });
  });

  describe('Reset the password', () => {
    it('Should return response with success is true', async () => {
      const req = createRequest();
      const res = createResponse();

      await controller.resetPassword(req, res);

      expect(res.statusCode).toBe(200);
      expect(res._getJSONData().success).toBeTruthy();
    });
  });
});
