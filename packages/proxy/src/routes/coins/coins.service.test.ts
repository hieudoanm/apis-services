import axios from 'axios';
import { getCoins } from './coins.service';

jest.mock('axios');

describe('forex service', () => {
  describe('getVisas', () => {
    it('should return visas', async () => {
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const coinsReponse = await getCoins({});
      expect(coinsReponse).toEqual({ status: 'success' });
    });
  });
});
