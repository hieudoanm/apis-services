import { Controller, Get, Query, Route, Tags } from 'tsoa';
import { ifDraws, ifLoses, ifWins } from './elo.service';
import { Result } from './elo.enums';
import { EloResponse } from './elo.types';

@Route('api/elo')
@Tags('Elo')
export class EloController extends Controller {
  @Get()
  public calculate(
    @Query() result: Result,
    @Query() playerRating: number,
    @Query() opponentRating: number
  ): EloResponse {
    if (result === Result.WIN) {
      const newPlayerRating = ifWins(playerRating, opponentRating);
      const newOpponentRating = ifLoses(opponentRating, playerRating);
      return { newPlayerRating, newOpponentRating };
    }
    if (result === Result.DRAW) {
      const newPlayerRating = ifDraws(playerRating, opponentRating);
      const newOpponentRating = ifDraws(opponentRating, playerRating);
      return { newPlayerRating, newOpponentRating };
    }
    if (result === Result.LOSE) {
      const newPlayerRating = ifLoses(playerRating, opponentRating);
      const newOpponentRating = ifWins(opponentRating, playerRating);
      return { newPlayerRating, newOpponentRating };
    }
    return { newPlayerRating: playerRating, newOpponentRating: opponentRating };
  }
}
