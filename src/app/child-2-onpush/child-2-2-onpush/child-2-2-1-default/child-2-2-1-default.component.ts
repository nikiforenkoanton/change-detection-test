import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { blinkAnimation }                               from 'src/app/animations';
import { BaseCdrComponent }                             from 'src/app/base-cdr.component';
import { ChangeDetectionStrategiesEnum }                from 'src/app/enums/change-detection-strategies.enum';

const changeDetectionStrategyKey: ChangeDetectionStrategiesEnum = ChangeDetectionStrategiesEnum.Default;
const changeDetectionStrategy: ChangeDetectionStrategy = ChangeDetectionStrategy[changeDetectionStrategyKey];

@Component({
  selector: 'app-child-2-2-1-default',
  templateUrl: './child-2-2-1-default.component.html',
  changeDetection: changeDetectionStrategy,
  animations: [blinkAnimation],
})
export class Child221DefaultComponent extends BaseCdrComponent {
  public changeDetectionStrategyKey: ChangeDetectionStrategiesEnum = changeDetectionStrategyKey;

  constructor(
    private injector: Injector,
  ) {
    super(injector);
  }
}
