import request from 'supertest';
import { app } from '../src/app';

describe('User API', () => {
  it('Should display a list of users', async () => {
    const { status, body } = await request(app).get('/api/v1/users');
    expect(status).toBe(200);
    expect(Array.isArray(body.data)).toBe(true);
  });

  it('Should display a user', async () => {
    const id = 1;
    const { status, body } = await request(app).get(`/api/v1/users/${id}`);
    expect(status).toBe(200);
    expect(body.data.id).toBe(id);
  });
});
