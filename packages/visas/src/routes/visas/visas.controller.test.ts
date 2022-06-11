import axios from 'axios';
import { VisasController } from './visas.controller';
import { html } from './__fixtures__/html.mock';

jest.mock('axios');

describe('visas controller', () => {
  const visasController = new VisasController();

  describe('getVisas', () => {
    it('should return visas', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: html });
      const { total, data } = await visasController.getVisas();

      const expectedVisas = [
        { country: 'Country', requirement: 'Requirement' },
      ];
      expect(total).toEqual(expectedVisas.length);
      expect(data).toEqual(expectedVisas);
    });
  });
});
