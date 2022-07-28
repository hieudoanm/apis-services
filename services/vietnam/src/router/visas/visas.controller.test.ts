import { VisasController } from './visas.controller';

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

describe('visas controller', () => {
  const visasController = new VisasController();

  describe('getVisas', () => {
    it('should return visas', async () => {
      const { total, data } = await visasController.getVisas();
      const expectedVisas = [
        { country: 'Country', requirement: 'Requirement' },
      ];
      expect(total).toEqual(expectedVisas.length);
      expect(data).toEqual(expectedVisas);
    });
  });
});
