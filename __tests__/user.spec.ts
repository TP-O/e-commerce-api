import request from 'supertest';
import { setUp } from '../setup';
import { app } from '../src/app';
import { DBConnection } from '../src/database/core';

beforeAll(async () => {
  await DBConnection.establish();
  await setUp();
});

describe('Users', () => {
  /**
   * GET methods.
   */
  describe('/GET users', () => {
    test('Should return a list of users', async () => {
      const { status, body } = await request(app).get('/api/v1/users');
      expect(status).toBe(200);
      expect(Array.isArray(body.data)).toBe(true);
    });
  });

  /**
   * POST methods.
   */
  describe('/POST users', () => {
    test('Should return success: true', async () => {
      const { status, body } = await request(app).post('/api/v1/users').send({
        name: '11111',
        email: 'email@gmail.com',
        password: '11111',
      });
      expect(status).toBe(201);
      expect(body.success).toBe(true);
    });

    test('Should return error: name is required', async () => {
      const { status, body } = await request(app).post('/api/v1/users').send({
        email: 'email@gmail.com',
        password: '11111',
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('name');
    });

    test('Should return error: name must be a string', async () => {
      const { status, body } = await request(app).post('/api/v1/users').send({
        name: 11111,
        email: 'email@gmail.com',
        password: '11111',
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('name');
    });

    test('Should return error: name length must be at least 5 characters long', async () => {
      const { status, body } = await request(app).post('/api/v1/users').send({
        name: '1111',
        email: 'email@gmail.com',
        password: '11111',
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('name');
    });

    test('Should return error: email is required', async () => {
      const { status, body } = await request(app).post('/api/v1/users').send({
        name: '11111',
        password: '11111',
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('email');
    });

    test('Should return error: email must be a string', async () => {
      const { status, body } = await request(app).post('/api/v1/users').send({
        name: '11111',
        email: 11111,
        password: '11111',
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('email');
    });

    test('Should return error: password is required', async () => {
      const { status, body } = await request(app).post('/api/v1/users').send({
        name: '11111',
        email: 'email@gmail.com',
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('password');
    });

    test('Should return error: password must be a string', async () => {
      const { status, body } = await request(app).post('/api/v1/users').send({
        name: '11111',
        email: 'email@gmail.com',
        password: 11111,
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('password');
    });

    test('Should return error: password length must be at least 5 characters long', async () => {
      const { status, body } = await request(app).post('/api/v1/users').send({
        name: '1111',
        email: 'email@gmail.com',
        password: '1111',
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('password');
    });
  });

  /**
   * GET methods.
   */
  describe('/GET/:id users', () => {
    test('Should return a user', async () => {
      const id = 1;
      const { status, body } = await request(app).get(`/api/v1/users/${id}`);
      expect(status).toBe(200);
      expect(body.data.id).toBe(id);
    });

    test('Should return 404 error', async () => {
      const id = 99;
      const { status } = await request(app).get(`/api/v1/users/${id}`);
      expect(status).toBe(404);
    });
  });

  /**
   * PUT methods.
   */
  describe('/PUT/:id users', () => {
    test('Should return success: true', async () => {
      const id = 1;
      const { status, body } = await request(app).put(`/api/v1/users/${id}`).send({
        name: '11111',
        email: 'emaill@gmail.com',
        password: '11111',
      });
      expect(status).toBe(201);
      expect(body.success).toBe(true);
    });

    test('Should return error: name must be a string', async () => {
      const id = 1;
      const { status, body } = await request(app).put(`/api/v1/users/${id}`).send({
        name: 11111,
        email: 'email@gmail.com',
        password: '11111',
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('name');
    });

    test('Should return error: name length must be at least 5 characters long', async () => {
      const id = 1;
      const { status, body } = await request(app).put(`/api/v1/users/${id}`).send({
        name: '1111',
        email: 'email@gmail.com',
        password: '11111',
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('name');
    });

    test('Should return error: email must be a string', async () => {
      const id = 1;
      const { status, body } = await request(app).put(`/api/v1/users/${id}`).send({
        name: '11111',
        email: 11111,
        password: '11111',
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('email');
    });

    test('Should return error: password must be a string', async () => {
      const id = 1;
      const { status, body } = await request(app).put(`/api/v1/users/${id}`).send({
        name: '11111',
        email: 'email@gmail.com',
        password: 11111,
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('password');
    });

    test('Should return error: password length must be at least 5 characters long', async () => {
      const id = 1;
      const { status, body } = await request(app).put(`/api/v1/users/${id}`).send({
        name: '1111',
        email: 'email@gmail.com',
        password: '1111',
      });
      expect(status).toBe(400);
      expect(body.message).toHaveProperty('password');
    });

    test('Should return 404 error', async () => {
      const id = 99;
      const { status } = await request(app).put(`/api/v1/users/${id}`).send({
        name: '11111',
        email: 'email@gmail.com',
        password: '11111',
      });
      expect(status).toBe(404);
    });
  });

  /**
   * DELETE methods.
   */
  describe('/DELETE/:id users', () => {
    test('Should return success: true', async () => {
      const id = 1;
      const { status, body } = await request(app).delete(`/api/v1/users/${id}`);
      expect(status).toBe(201);
      expect(body.success).toBe(true);
    });

    test('Should return 404 error', async () => {
      const id = 99;
      const { status } = await request(app).delete(`/api/v1/users/${id}`);
      expect(status).toBe(404);
    });
  });
});
