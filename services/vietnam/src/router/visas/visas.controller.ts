import { Controller, Get, Route, Tags } from 'tsoa';
import { getVisas } from './visas.service';
import { Visa } from './visas.types';

@Route('api/visas')
@Tags('Visas')
export class VisasController extends Controller {
  @Get()
  public async getVisas(): Promise<{ total: number; data: Visa[] }> {
    const visas = await getVisas();
    const total = visas.length;
    return { total, data: visas };
  }
}
