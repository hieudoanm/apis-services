import axios from 'axios';
import { getVisas } from './visas.service';
import { Visa } from './visas.types';
import { html } from './__fixtures__/html.mock';

jest.mock('axios');

describe('visas service', () => {
  describe('getVisas', () => {
    it('should return visas', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: html });
      const visas: Visa[] = await getVisas();
      expect(visas).toEqual([
        { country: 'Country', requirement: 'Requirement' },
      ]);
    });
  });
});
