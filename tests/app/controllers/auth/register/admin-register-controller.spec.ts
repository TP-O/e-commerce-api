import 'reflect-metadata';
import { AdminRegisterController } from '@app/controllers/auth';
import { createRequest, createResponse } from 'node-mocks-http';

describe('Test AdminRegisterController', () => {
  const Service = jest.fn().mockImplementation(() => {
    return {
      registerAccount: jest.fn().mockReturnValueOnce(0).mockReturnValue(1),
      findRoleByName: jest
        .fn()
        .mockReturnValueOnce(undefined)
        .mockReturnValue({ id: 1 }),
      findAccountByEmail: jest
        .fn()
        .mockReturnValueOnce(undefined)
        .mockReturnValue({ id: 1 }),
      createActivationCode: jest
        .fn()
        .mockReturnValueOnce('')
        .mockReturnValue('xxx'),
      assign: jest.fn().mockReturnValueOnce(false).mockReturnValue(true),
      sendEmail: jest.fn(),
    };
  });
  const Validator = jest.fn().mockImplementation(() => {
    return {
      validate: (input: any) => input,
    };
  });
  const controller = new AdminRegisterController(
    new Validator(),
    new Service(),
  );

  describe('Create the account', () => {
    it('Should throw the error', async () => {
      let err;

      try {
        await controller.create({
          name: 'name',
          email: 'email@gmail.com',
          password: 'password',
        });
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return account id', async () => {
      const success = await controller.create({
        name: 'name',
        email: 'email@gmail.com',
        password: 'password',
      });

      expect(success).toBeGreaterThan(0);
    });
  });

  describe('Find the role by name', () => {
    it('Should throw the error', async () => {
      let err;

      try {
        await controller.findRoleByName('role');
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return the role', async () => {
      const role = await controller.findRoleByName('role');

      expect(role).toHaveProperty('id');
    });
  });

  describe('Find the account by email', () => {
    it('Should throw the error', async () => {
      let err;

      try {
        await controller.findAccountByEmail('email@gmail.com');
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return the account', async () => {
      const account = await controller.findAccountByEmail('email@gmail.com');

      expect(account).toHaveProperty('id');
    });
  });

  describe('Create the activation code for account', () => {
    it('Should throw the error', async () => {
      let err;

      try {
        await controller.createActivationCode(1);
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return the activation code', async () => {
      const code = await controller.createActivationCode(1);

      expect(code.length).toBeGreaterThan(0);
    });
  });

  describe('Resend the activation email', () => {
    it('Should throw the error', async () => {
      let err;
      const req = createRequest();
      const res = createResponse();

      try {
        await controller.resendEmail(req, res);
      } catch (e) {
        err = e;
      }

      expect(err).toHaveProperty('status');
    });

    it('Should return response with success is true', async () => {
      const req = createRequest({
        user: {
          email: 'email@gmail.com',
        },
      });
      const res = createResponse();

      await controller.resendEmail(req, res);

      expect(res.statusCode).toBe(200);
      expect(res._getJSONData().success).toBeTruthy();
    });
  });

  describe('Register the account', () => {
    it('Should return response with success is true', async () => {
      const req = createRequest({
        body: {
          email: 'email@gmail.com',
          password: 'password',
        },
      });
      const res = createResponse();

      await controller.register(req, res);

      expect(res.statusCode).toBe(200);
      expect(res._getJSONData().success).toBeTruthy();
    });
  });
});
