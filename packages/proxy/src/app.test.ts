import supertest from 'supertest';
import app from './app';

describe('app', () => {
  it('GET /api/docs has status code = 200', async () => {
    const response = await supertest(app).get('/api/docs');
    expect(response.statusCode).toBe(200);
  });

  it('GET /api/coins has status code = 200', async () => {
    const response = await supertest(app).get('/api/coins');
    expect(response.statusCode).toBe(200);
  });

  it('GET /api/forex has status code = 200', async () => {
    const response = await supertest(app).get('/api/forex');
    expect(response.statusCode).toBe(200);
  });
});
