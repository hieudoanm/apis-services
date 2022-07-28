import { getCoins } from './coins.service';

jest.mock('../../libs/axios', () => {
  const mockAxiosGet = jest.fn().mockResolvedValueOnce({ status: 'success' });
  return {
    axiosGet: mockAxiosGet,
  };
});

describe('forex service', () => {
  describe('getVisas', () => {
    it('should return visas', async () => {
      const coinsReponse = await getCoins({});
      expect(coinsReponse).toEqual({ status: 'success' });
    });
  });
});
