import { TarotController } from './tarot.controller';

describe('tarot controller', () => {
  const tarotController = new TarotController();

  describe('getCards', () => {
    it('should return cards', async () => {
      const { total, data } = await tarotController.getCards();

      expect(total).toBeTruthy();
      expect(data).toBeTruthy();
    });
  });

  describe('getCard', () => {
    it('should return card', async () => {
      const { card } = await tarotController.getCard('major-major-00');
      expect(card).toBeTruthy();
    });

    it('should return null', async () => {
      const { card } = await tarotController.getCard('test');
      expect(card).toBeFalsy();
    });
  });

  describe('randomise', () => {
    it('should return cards', async () => {
      const { total, data } = await tarotController.randomise();

      expect(total).toBeTruthy();
      expect(data).toBeTruthy();
    });
  });
});
