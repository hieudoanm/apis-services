import { axiosGet } from '@apis-services/shared';
import { ForexResponse } from './forex.types';

const FIXER_KEY = process.env.FIXER_KEY || '';

export const getForex = async (): Promise<ForexResponse> => {
  const url = `http://data.fixer.io/api/latest?access_key=${FIXER_KEY}`;
  return await axiosGet<ForexResponse>(url);
};
