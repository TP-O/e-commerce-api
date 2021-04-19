import 'reflect-metadata';
import { RequireRefreshToken } from '@app/middleware';
import { createRequest, createResponse } from 'node-mocks-http';
import { NextFunction } from 'express';

describe('Test RequireRefreshToken', () => {
  const middleware = new RequireRefreshToken();

  it('Should throw the error', () => {
    let err;
    const req = createRequest();
    const res = createResponse();
    const next = (jest.fn() as unknown) as NextFunction;

    try {
      middleware.handle()(req, res, next);
    } catch (e) {
      err = e;
    }

    expect(err).toHaveProperty('status');
  });

  it('Should pass', () => {
    const req = createRequest({
      cookies: {
        refreshToken: 'xxxx',
      },
    });
    const res = createResponse();
    const next = (jest.fn() as unknown) as NextFunction;

    middleware.handle()(req, res, next);

    expect(next).toBeCalled();
  });
});
