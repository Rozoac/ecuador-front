import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rmEtiquetas'
})
export class RmEtiquetasPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let texto = value.replace(/<[^>]*>?/g, '');
    return texto;
  }

}
