import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPurePipe',
})
export class PurePipe implements PipeTransform {
  private counter: number = 0;

  public transform(value: any): any {
    return this.counter++;
  }
}
