import supertest from 'supertest';
import app from './app';

describe('app', () => {
  it('GET /api/docs has status code = 200', async () => {
    const response = await supertest(app).get('/api/docs');
    expect(response.statusCode).toBe(200);
  });

  it('GET /api/elo has status code = 200', async () => {
    const response = await supertest(app).get(
      '/api/elo?result=W&playerRating=1400&opponentRating=1400'
    );
    expect(response.statusCode).toBe(200);
  });
});
