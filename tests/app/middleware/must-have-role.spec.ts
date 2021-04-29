import 'reflect-metadata';
import { MustHaveRole } from '@app/middleware';
import { NextFunction } from 'express';
import { createRequest, createResponse } from 'node-mocks-http';

describe('Test MustHaveRole', () => {
  const middleware = new MustHaveRole();

  it('Should throw the error', async () => {
    let err;
    const req = createRequest({
      user: {
        get: () => {
          return {
            data: {
              first: () => {
                return {
                  role: { name: 'another role' },
                };
              },
            },
          };
        },
      },
    });
    const res = createResponse();
    const next = (jest.fn() as unknown) as NextFunction;

    try {
      await middleware.handle('required role')(req, res, next);
    } catch (e) {
      err = e;
    }

    expect(err).toHaveProperty('status');
  });

  it('Should pass', async () => {
    const req = createRequest({
      user: {
        get: () => {
          return {
            data: {
              first: () => {
                return {
                  role: { name: 'required role' },
                };
              },
            },
          };
        },
      },
    });
    const res = createResponse();
    const next = (jest.fn() as unknown) as NextFunction;

    await middleware.handle('required role')(req, res, next);

    expect(next).toBeCalled();
  });
});
