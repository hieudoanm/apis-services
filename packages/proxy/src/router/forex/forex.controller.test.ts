import { ForexController } from './forex.controller';
import { ForexResponse } from './forex.types';

jest.mock('../../libs/axios', () => {
  const mockAxiosGet = jest.fn().mockResolvedValueOnce({ status: 'success' });
  return {
    axiosGet: mockAxiosGet,
  };
});

describe('forex service', () => {
  const forexController = new ForexController();

  describe('getVisas', () => {
    it('should return visas', async () => {
      const forexResponse: ForexResponse = await forexController.getForex();
      expect(forexResponse).toEqual({ status: 'success' });
    });
  });
});
