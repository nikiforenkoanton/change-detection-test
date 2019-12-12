import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { BaseCdrComponent }                             from 'src/app/base-cdr.component';
import { ChangeDetectionStrategiesEnum }                from 'src/app/enums/change-detection-strategies.enum';
import { GLOBAL_CD_STRATEGY_KEY }                       from 'src/app/global-cd-strategy.const';

const changeDetectionStrategyKey: ChangeDetectionStrategiesEnum = GLOBAL_CD_STRATEGY_KEY || ChangeDetectionStrategiesEnum.Default;
const changeDetectionStrategy: ChangeDetectionStrategy = ChangeDetectionStrategy[changeDetectionStrategyKey];

@Component({
  selector: 'app-child-2-1-default',
  templateUrl: './child-2-1-default.component.html',
  changeDetection: changeDetectionStrategy,
})
export class Child21DefaultComponent extends BaseCdrComponent {
  public changeDetectionStrategyKey: ChangeDetectionStrategiesEnum = changeDetectionStrategyKey;

  constructor(
    private injector: Injector,
  ) {
    super(injector);
  }
}
