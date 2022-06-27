import { Controller, Get, Route, Tags } from 'tsoa';
import { getForex } from './forex.service';
import { ForexResponse } from './forex.types';

@Route('api/forex')
@Tags('Forex')
export class ForexController extends Controller {
  @Get()
  public async getForex(): Promise<ForexResponse> {
    return getForex();
  }
}
