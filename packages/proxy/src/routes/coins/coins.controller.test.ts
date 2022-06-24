import { CoinsController } from './coins.controller';

jest.mock('@apis-services/shared', () => {
  const mockAxiosGet = jest.fn().mockResolvedValueOnce({ status: 'success' });
  return { axiosGet: mockAxiosGet };
});

describe('forex service', () => {
  const coinsController = new CoinsController();
  describe('getVisas', () => {
    it('should return visas', async () => {
      const coinsReponse = await coinsController.getCoins();
      expect(coinsReponse).toEqual({ status: 'success' });
    });
  });
});
