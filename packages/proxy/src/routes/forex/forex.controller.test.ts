import * as shared from '@apis-services/shared';
import { ForexController } from './forex.controller';
import { ForexResponse } from './forex.types';

jest.mock('@apis-services/shared');

describe('forex service', () => {
  const forexController = new ForexController();

  describe('getVisas', () => {
    it('should return visas', async () => {
      jest
        .spyOn(shared, 'axiosGet')
        .mockResolvedValueOnce({ status: 'success' });

      const forexResponse: ForexResponse = await forexController.getForex();
      expect(forexResponse).toEqual({ status: 'success' });
    });
  });
});
