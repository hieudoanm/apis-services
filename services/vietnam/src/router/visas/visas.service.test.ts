import { getVisas } from './visas.service';
import { Visa } from './visas.types';

jest.mock('../../libs/axios', () => {
  const html = `<table id="psprt-dashboard-table">
<tbody>
  <tr>
    <td>Country</td>
    <td>Requirement</td>
  </tr>
</tbody>
</table>`;
  const mockAxiosGet = jest.fn().mockResolvedValueOnce(html);
  return { axiosGet: mockAxiosGet };
});

describe('visas service', () => {
  describe('getVisas', () => {
    it('should return visas', async () => {
      const visas: Visa[] = await getVisas();
      expect(visas).toEqual([
        { country: 'Country', requirement: 'Requirement' },
      ]);
    });
  });
});
