import axios from 'axios';
import { getForex } from './forex.service';
import { ForexResponse } from './forex.types';

jest.mock('axios');

describe('forex service', () => {
  describe('getVisas', () => {
    it('should return visas', async () => {
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const forexResponse: ForexResponse = await getForex();
      expect(forexResponse).toEqual({ status: 'success' });
    });
  });
});
