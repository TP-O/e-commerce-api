import 'reflect-metadata';
import { RequireAccessToken } from '@app/middleware';
import { createRequest, createResponse } from 'node-mocks-http';
import { NextFunction } from 'express';

jest.mock('@modules/helper', () => {
  return {
    verify: jest
      .fn()
      .mockReturnValueOnce({
        success: false,
      })
      .mockReturnValue({
        success: true,
      }),
  };
});

describe('Test RequireAccessToken', () => {
  const middleware = new RequireAccessToken();

  it('Should throw the error - miss access token', async () => {
    let err;
    const req = createRequest();
    const res = createResponse();
    const next = (jest.fn() as unknown) as NextFunction;

    try {
      await middleware.handle()(req, res, next);
    } catch (e) {
      err = e;
    }

    expect(err).toHaveProperty('status');
  });

  it('Should throw the error - verify failed', async () => {
    let err;
    const req = createRequest({
      cookies: {
        accessToken: 'xxxx',
      },
    });
    const res = createResponse();
    const next = (jest.fn() as unknown) as NextFunction;

    try {
      await middleware.handle()(req, res, next);
    } catch (e) {
      err = e;
    }

    expect(err).toHaveProperty('status');
  });

  it('Should pass', async () => {
    const req = createRequest({
      cookies: {
        accessToken: 'xxxx',
      },
    });
    const res = createResponse();
    const next = (jest.fn() as unknown) as NextFunction;

    await middleware.handle()(req, res, next);

    expect(next).toBeCalled();
  });
});
