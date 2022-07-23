import { EloController } from './elo.controller';
import { Result } from './elo.enums';
import { testCases } from './__fixtures__/controller.mock';

describe('elo', () => {
  const eloController = new EloController();

  test.each(testCases)(
    'when a %d plays against %d',
    (
      result,
      playerRating,
      opponentRating,
      expectedNewPlayerRating,
      expectedNewOpponentRating
    ) => {
      const { newPlayerRating, newOpponentRating } = eloController.calculate(
        result as Result,
        playerRating as number,
        opponentRating as number
      );

      expect({ newPlayerRating, newOpponentRating }).toEqual({
        newPlayerRating: expectedNewPlayerRating,
        newOpponentRating: expectedNewOpponentRating,
      });
    }
  );
});
