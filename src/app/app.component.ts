import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { BaseCdrComponent }                             from 'src/app/base-cdr.component';
import { ChangeDetectionStrategiesEnum }                from 'src/app/enums/change-detection-strategies.enum';
import { GLOBAL_CD_STRATEGY_KEY }                       from 'src/app/global-cd-strategy.const';

const changeDetectionStrategyKey: ChangeDetectionStrategiesEnum = GLOBAL_CD_STRATEGY_KEY || ChangeDetectionStrategiesEnum.Default;
const changeDetectionStrategy: ChangeDetectionStrategy = ChangeDetectionStrategy[changeDetectionStrategyKey];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: changeDetectionStrategy,
})
export class AppComponent extends BaseCdrComponent {
  public changeDetectionStrategyKey: ChangeDetectionStrategiesEnum = changeDetectionStrategyKey;

  constructor(
    private injector: Injector,
  ) {
    super(injector);
  }
}
