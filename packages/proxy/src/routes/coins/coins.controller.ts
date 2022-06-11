import { Controller, Get, Query, Route, Tags } from 'tsoa';
import { axiosGet } from '../../utils/axios';
import { Tag, TimePeriod, Tier, OrderBy, OrderDirection } from './coins.enums';

const COIN_RANKING_KEY = process.env.COIN_RANKING_KEY || '';

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
  ): Promise<any> {
    const query = new URLSearchParams();
    query.set('limit', limit.toString());
    query.set('offset', offset.toString());
    query.set('orderBy', orderBy);
    query.set('orderDirection', orderDirection);
    query.set('tags', tags);
    query.set('timePeriod', timePeriod);
    query.set('tier', tier);
    const url = `https://api.coinranking.com/v2/coins?${query.toString()}`;
    const configs = { headers: { 'x-access-token': COIN_RANKING_KEY } };
    return await axiosGet(url, configs);
  }
}
