import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { BaseCdrComponent }                             from 'src/app/cdr/base-cdr.component';
import { ChangeDetectionStrategiesEnum }                from 'src/app/enums/change-detection-strategies.enum';

@Component({
  selector: 'app-cdr-onpush',
  templateUrl: './cdr.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdrOnpushComponent extends BaseCdrComponent {
  public changeDetectionStrategyKey: ChangeDetectionStrategiesEnum = ChangeDetectionStrategiesEnum.OnPush;

  constructor(
    private injector: Injector,
  ) {
    super(injector);
  }
}
