import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { blinkAnimation }                               from 'src/app/animations';
import { BaseCdrComponent }                             from 'src/app/base-cdr.component';
import { ChangeDetectionStrategiesEnum }                from 'src/app/enums/change-detection-strategies.enum';

const changeDetectionStrategyKey: ChangeDetectionStrategiesEnum = ChangeDetectionStrategiesEnum.OnPush;
const changeDetectionStrategy: ChangeDetectionStrategy = ChangeDetectionStrategy[changeDetectionStrategyKey];

@Component({
  selector: 'app-child-1-1-2-onpush',
  templateUrl: './child-1-1-2-onpush.component.html',
  changeDetection: changeDetectionStrategy,
  animations: [blinkAnimation],
})
export class Child112OnpushComponent extends BaseCdrComponent {
  public changeDetectionStrategyKey: ChangeDetectionStrategiesEnum = changeDetectionStrategyKey;

  constructor(
    private injector: Injector,
  ) {
    super(injector);
  }
}
