import { Controller, Get, Path, Query, Route, Tags } from 'tsoa';
import { cards } from './tarot.cards';
import { Card } from './tarot.types';

@Route('tarot')
export class TarotController extends Controller {
  @Tags('Tarot')
  @Get()
  public getCards(): { total: number; data: Card[] } {
    const total: number = cards.length;
    return { total, data: cards };
  }

  @Tags('Tarot')
  @Get('random')
  public randomise(@Query('total') total = 1): { total: number; data: Card[] } {
    const randomCards = [];
    for (let i = 0; i < total; i++) {
      const cardIndex = Math.floor(Math.random() * (cards.length - 1));
      const card = cards[cardIndex];
      randomCards.push(card);
    }
    return { total, data: randomCards };
  }

  @Tags('Tarot')
  @Get(':id')
  public getCard(@Path() id: string): { card: Card | null } {
    const card = cards.find((card) => card.id === id) || null;
    return { card };
  }
}
