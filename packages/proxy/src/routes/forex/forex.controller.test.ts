import axios from 'axios';
import { ForexController } from './forex.controller';
import { ForexResponse } from './forex.types';

jest.mock('axios');

describe('forex service', () => {
  const forexController = new ForexController();
  describe('getVisas', () => {
    it('should return visas', async () => {
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const forexResponse: ForexResponse = await forexController.getForex();
      expect(forexResponse).toEqual({ status: 'success' });
    });
  });
});
