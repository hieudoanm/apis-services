import supertest from 'supertest';
import app from './app';

describe('app', () => {
  it('GET /api/docs has status code = 200', async () => {
    const response = await supertest(app).get('/api/docs');
    expect(response.statusCode).toBe(200);
  });

  it('GET /api/licenses has status code = 200', async () => {
    const response = await supertest(app).get('/api/licenses');
    expect(response.statusCode).toBe(200);
  });

  it('GET /api/visas has status code = 200', async () => {
    const response = await supertest(app).get('/api/visas');
    expect(response.statusCode).toBe(200);
  });
});
