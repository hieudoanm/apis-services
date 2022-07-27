import { load } from 'cheerio';
import { axiosGet } from '../../libs/axios';
import { Visa } from './visas.types';

export const getVisas = async (): Promise<Visa[]> => {
  const url = 'https://www.passportindex.org/passport/viet-nam/';
  const html: string = await axiosGet<string>(url);
  const $ = load(html);

  return $('table#psprt-dashboard-table tbody tr')
    .get()
    .map((row) => {
      const $row = $(row);
      const country = $row.find('td:nth-child(1)').text().trim();
      const requirement = $row.find('td:nth-child(2)').text().trim();

      return { country, requirement };
    });
};
