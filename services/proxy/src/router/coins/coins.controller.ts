import { Controller, Get, Query, Route, Tags } from 'tsoa';
import { Tag, TimePeriod, Tier, OrderBy, OrderDirection } from './coins.enums';
import { getCoins } from './coins.service';
import { CoinsResponse } from './coins.types';

@Route('api/coins')
@Tags('Coins')
export class CoinsController extends Controller {
  @Get()
  public async getCoins(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('orderBy') orderBy: OrderBy = OrderBy.MARKET_CAP,
    @Query('orderDirection')
    orderDirection: OrderDirection = OrderDirection.DESC,
    @Query('tags') tags: Tag = Tag.LAYER_1,
    @Query('timePeriod') timePeriod: TimePeriod = TimePeriod.HOUR_24,
    @Query('tier') tier: Tier = Tier.TIER_1
  ): Promise<CoinsResponse> {
    const coinsOptions = {
      limit,
      offset,
      orderBy,
      orderDirection,
      tags,
      timePeriod,
      tier,
    };
    return getCoins(coinsOptions);
  }
}
