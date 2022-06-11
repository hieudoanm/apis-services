import axios from 'axios';
import { CoinsController } from './coins.controller';

jest.mock('axios');

describe('forex service', () => {
  const coinsController = new CoinsController();
  describe('getVisas', () => {
    it('should return visas', async () => {
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const coinsReponse = await coinsController.getCoins();
      expect(coinsReponse).toEqual({ status: 'success' });
    });
  });
});
