import * as shared from '@apis-services/shared';
import { getForex } from './forex.service';
import { ForexResponse } from './forex.types';

jest.mock('@apis-services/shared');

describe('forex service', () => {
  describe('getForex', () => {
    it('should return visas', async () => {
      jest
        .spyOn(shared, 'axiosGet')
        .mockResolvedValueOnce({ status: 'success' });
      const forexResponse: ForexResponse = await getForex();
      expect(forexResponse).toEqual({ status: 'success' });
    });
  });
});
