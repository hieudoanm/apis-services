import { load } from 'cheerio';
import { Controller, Get, Route, Tags } from 'tsoa';
import axiosSync from '../../libs/axios';
import { Visa } from './visas.types';

@Route('visas')
export class VisasController extends Controller {
  @Tags('Visas')
  @Get()
  public async getVisas(): Promise<{ total: number; data: Visa[] }> {
    const url = 'https://www.passportindex.org/passport/viet-nam/';
    const html: string = await axiosSync<string>({ url });
    const $ = load(html);

    const visas = $('table#psprt-dashboard-table tbody tr')
      .get()
      .map((row) => {
        const $row = $(row);
        const country = $row.find('td:nth-child(1)').text().trim();
        const requirement = $row.find('td:nth-child(2)').text().trim();

        return { country, requirement };
      });

    return { total: visas.length, data: visas };
  }
}
