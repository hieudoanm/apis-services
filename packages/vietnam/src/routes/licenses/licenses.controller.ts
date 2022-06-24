import { Controller, Get, Path, Route, Tags } from 'tsoa';
import { plates } from './licenses.plates';
import { Plate } from './licenses.types';

@Route('api/licenses')
export class LicensesController extends Controller {
  @Tags('License')
  @Get()
  public getPlates(): { total: number; data: Plate[] } {
    const total: number = plates.length;
    return { total, data: plates };
  }

  @Tags('License')
  @Get(':id')
  public getPlate(@Path() id: string | number): { plate: Plate | null } {
    const plate =
      plates.find(
        (plate: Plate) => plate.license.toString() === id.toString()
      ) || null;
    return { plate };
  }
}
