import { axiosGet } from '@apis-services/shared';
import { OrderBy, OrderDirection, Tag, Tier, TimePeriod } from './coins.enums';
import { CoinsResponse } from './coins.types';

const COIN_RANKING_KEY = process.env.COIN_RANKING_KEY || '';

export const getCoins = async ({
  limit = 100,
  offset = 0,
  orderBy = OrderBy.MARKET_CAP,
  orderDirection = OrderDirection.DESC,
  tags = Tag.LAYER_1,
  timePeriod = TimePeriod.HOUR_24,
  tier = Tier.TIER_1,
}: {
  limit?: number;
  offset?: number;
  orderBy?: OrderBy;
  orderDirection?: OrderDirection;
  tags?: Tag;
  timePeriod?: TimePeriod;
  tier?: Tier;
}): Promise<CoinsResponse> => {
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
  return axiosGet(url, configs);
};
