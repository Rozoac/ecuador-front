import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ciudad'
})
export class CiudadPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (value === 'BogotÃ¡') {
      return 'Bogotá';
    }
    if (value === 'IbaguÃ©') {
      return 'Ibagué';
    }
    if (value === 'MedellÃ­n')  {
      return 'Medellín';
    } else {
      return value;
    }
  }

}
