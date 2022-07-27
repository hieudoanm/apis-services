import { ifWins, ifDraws, ifLoses } from './elo.service';
import { testCases } from './__fixtures__/service.mock';

describe('elo', () => {
  test.each(testCases)(
    'when a %d plays against %d',
    (
      playerRating,
      opponentRating,
      expectedWinsRating,
      expectedDrawsRating,
      expectedLosesRating
    ) => {
      const winsRating = ifWins(playerRating, opponentRating);
      const drawsRating = ifDraws(playerRating, opponentRating);
      const losesRating = ifLoses(playerRating, opponentRating);

      expect({ winsRating, drawsRating, losesRating }).toEqual({
        winsRating: expectedWinsRating,
        drawsRating: expectedDrawsRating,
        losesRating: expectedLosesRating,
      });
    }
  );
});
