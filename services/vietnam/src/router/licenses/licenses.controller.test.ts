import { LicensesController } from './licenses.controller';

describe('visas controller', () => {
  const licensesController = new LicensesController();

  describe('getPlates', () => {
    it('should return plates', async () => {
      const { total, data } = await licensesController.getPlates();

      expect(total).toBeTruthy();
      expect(data).toBeTruthy();
    });
  });

  describe('getPlate', () => {
    it('should return plate', async () => {
      const { plate } = await licensesController.getPlate(29);
      expect(plate).toBeTruthy();
    });

    it('should return null', async () => {
      const { plate } = await licensesController.getPlate('test');
      expect(plate).toBeFalsy();
    });
  });
});
