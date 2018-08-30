import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comercial'
})
export class ComercialPipe implements PipeTransform {

  transform(value: any): any {

    let nombre;
    if (value === 'fcastrodelrio') {
      nombre = 'Ivan Castro';
    }
    if (value === 'dmendez') {
      nombre = 'David Mendez';
    }
    if (value === 'avila') {
      nombre = 'Alejandra Vila';
    }
    if (value === 'pvalencia') {
      nombre = 'Paula Valencia';
    }
    if (value === 'rrojas') {
      nombre = 'David Rojas';
    }
    if (value === 'fvargas') {
      nombre = 'Frank Vargas';
    }
    if (value === 'srodriguez') {
      nombre = 'Santiago Rodriguez';
    }
    if (value === 'cortega') {
      nombre = 'Carlos Ortega';
    }

    return nombre;
  }

}
