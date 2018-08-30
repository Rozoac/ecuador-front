import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {
    if (!all) {
      return this.capitalizeSelectWord(value);
    }
    return this.getAllWordsCapitalize(value);

  }
  private getAllWordsCapitalize(value: string) {
    const words = value.split(' ');
    let result = '';
    words.map(word => { result = `${result} ${this.capitalizeSelectWord(word)}`; });
    return result;
  }
  private capitalizeSelectWord(word: string) {
    return `${word.substring(0, 1).toUpperCase()}${word.substring(1).toLowerCase()}`;
  }
}
