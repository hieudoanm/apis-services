import { getForex } from './forex.service';
import { ForexResponse } from './forex.types';

jest.mock('../../libs/axios', () => {
  const mockAxiosGet = jest.fn().mockResolvedValueOnce({ status: 'success' });
  return {
    axiosGet: mockAxiosGet,
  };
});

describe('forex service', () => {
  describe('getForex', () => {
    it('should return visas', async () => {
      const forexResponse: ForexResponse = await getForex();
      expect(forexResponse).toEqual({ status: 'success' });
    });
  });
});
