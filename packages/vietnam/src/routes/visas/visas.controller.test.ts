import * as shared from '@apis-services/shared';
import { VisasController } from './visas.controller';
import { html } from './__fixtures__/html.mock';

jest.mock('@apis-services/shared');

describe('visas controller', () => {
  const visasController = new VisasController();

  describe('getVisas', () => {
    it('should return visas', async () => {
      jest.spyOn(shared, 'axiosGet').mockResolvedValueOnce(html);

      const { total, data } = await visasController.getVisas();
      const expectedVisas = [
        { country: 'Country', requirement: 'Requirement' },
      ];
      expect(total).toEqual(expectedVisas.length);
      expect(data).toEqual(expectedVisas);
    });
  });
});
