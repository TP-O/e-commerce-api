import 'reflect-metadata';
import { RequireInactiveAccount } from '@app/middleware';
import { createRequest, createResponse } from 'node-mocks-http';
import { NextFunction } from 'express';

describe('Test RequireInactiveAccount', () => {
  const middleware = new RequireInactiveAccount();

  it('Should throw the error', () => {
    let err;
    const req = createRequest({
      user: {
        active: true,
      },
    });
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
      user: {
        active: false,
      },
    });
    const res = createResponse();
    const next = (jest.fn() as unknown) as NextFunction;

    middleware.handle()(req, res, next);

    expect(next).toBeCalled();
  });
});
