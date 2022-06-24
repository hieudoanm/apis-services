import * as shared from '@apis-services/shared';
import { getVisas } from './visas.service';
import { Visa } from './visas.types';
import { html } from './__fixtures__/html.mock';

jest.mock('@apis-services/shared');

describe('visas service', () => {
  describe('getVisas', () => {
    it('should return visas', async () => {
      jest.spyOn(shared, 'axiosGet').mockResolvedValueOnce(html);

      const visas: Visa[] = await getVisas();
      expect(visas).toEqual([
        { country: 'Country', requirement: 'Requirement' },
      ]);
    });
  });
});
