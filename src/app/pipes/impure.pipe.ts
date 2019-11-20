import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appImpurePipe',
  pure: false,
})
export class ImpurePipe implements PipeTransform {
  private counter: number = 0;

  public transform(value: any): any {
    return this.counter++;
  }
}
