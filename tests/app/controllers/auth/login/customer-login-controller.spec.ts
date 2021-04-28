import 'reflect-metadata';
import { createRequest, createResponse } from 'node-mocks-http';
import { CustomerLoginController } from '@app/controllers/auth';

describe('Test CustomerLoginController', () => {
  const Service = jest.fn().mockImplementation(() => {
    return {
      validate: jest
        .fn()
        .mockReturnValueOnce({
          success: false,
        })
        .mockReturnValueOnce({
          success: true,
          accessToken: 'xxx',
          refreshToken: 'xxx',
        }),
      refresh: jest
        .fn()
        .mockReturnValueOnce({
          success: false,
        })
        .mockReturnValueOnce({
          success: true,
          accessToken: 'xxx',
          refreshToken: 'xxx',
        }),
    };
  });
  const Validator = jest.fn().mockImplementation(() => {
    return {
      validate: (input: any) => input,
    };
  });
  const controller = new CustomerLoginController(
    new Service(),
    new Validator(),
  );

  describe('Save the access token and refresh token to the cookie', () => {
    it('Should save tokens in cookie', () => {
      const res = createResponse();
      const tokens = {
        accessToken: 'xxx',
        refreshToken: 'xxx',
      };

      controller.setTokens(res, tokens);

      expect(res.cookies).toHaveProperty('accessToken');
      expect(res.cookies).toHaveProperty('refreshToken');
    });
  });

  describe('Clear the access token and refresh token', () => {
    it('Should remove tokens in cookie', () => {
      const res = createResponse();

      res.cookie('accessToken', 'xxx');
      res.cookie('refreshToken', 'xxx');

      controller.clearTokens(res);

      expect(res.cookies.accessToken.value.length).toBe(0);
      expect(res.cookies.refreshToken.value.length).toBe(0);
    });
  });

  describe('Log in to the system', () => {
    it('Should throw the error', async () => {
      let error;
      const req = createRequest();
      const res = createResponse();

      try {
        await controller.login(req, res);
      } catch (e) {
        error = e;
      }

      expect(error).toHaveProperty('status');
    });

    it('Should return the tokens', async () => {
      const req = createRequest();
      const res = createResponse();

      await controller.login(req, res);

      expect(res.statusCode).toBe(200);
      expect(res.cookies).toHaveProperty('accessToken');
      expect(res.cookies).toHaveProperty('refreshToken');
    });
  });

  describe('Refresh the access token', () => {
    it('Should throw an error', async () => {
      let error;
      const req = createRequest();
      const res = createResponse();

      try {
        await controller.refresh(req, res);
      } catch (e) {
        error = e;
      }

      expect(error).toHaveProperty('status');
    });

    it('Should return the new tokens', async () => {
      const req = createRequest();
      const res = createResponse();

      await controller.refresh(req, res);

      expect(res.statusCode).toBe(200);
      expect(res.cookies).toHaveProperty('accessToken');
      expect(res.cookies).toHaveProperty('refreshToken');
    });
  });

  describe('Log out of the system', () => {
    it('Should remove all tokens', () => {
      const req = createRequest();
      const res = createResponse();

      res.cookie('accessToken', 'xxx');
      res.cookie('refreshToken', 'xxx');

      controller.logout(req, res);

      expect(res.statusCode).toBe(200);
      expect(res.cookies.accessToken.value.length).toBe(0);
      expect(res.cookies.refreshToken.value.length).toBe(0);
    });
  });
});
