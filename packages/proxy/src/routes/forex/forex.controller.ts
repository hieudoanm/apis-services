import { Controller, Get, Route, Tags } from 'tsoa';
import { axiosGet } from '../../utils/axios';
import { ForexResponse } from './forex.types';

const FIXER_KEY = process.env.FIXER_KEY || '';

@Route('api/forex')
@Tags('Forex')
export class ForexController extends Controller {
  @Get()
  public async getForex(): Promise<ForexResponse> {
    const url = `http://data.fixer.io/api/latest?access_key=${FIXER_KEY}`;
    return await axiosGet(url);
  }
}
