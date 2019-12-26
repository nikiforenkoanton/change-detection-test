import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { BaseCdrComponent }                             from 'src/app/cdr/base-cdr.component';
import { ChangeDetectionStrategiesEnum }                from 'src/app/enums/change-detection-strategies.enum';

@Component({
  selector: 'app-cdr-default',
  templateUrl: './cdr.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CdrDefaultComponent extends BaseCdrComponent {
  public changeDetectionStrategyKey: ChangeDetectionStrategiesEnum = ChangeDetectionStrategiesEnum.Default;

  constructor(
    private injector: Injector,
  ) {
    super(injector);
  }
}
