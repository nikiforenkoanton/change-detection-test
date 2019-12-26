import { ApplicationRef, ChangeDetectionStrategy, Component, Injector, NgZone } from '@angular/core';
import { fromEvent }                                                            from 'rxjs';
import { filter }                                                               from 'rxjs/operators';
import { ChangeDetectionStrategiesEnum }                                        from 'src/app/enums/change-detection-strategies.enum';
import { GLOBAL_CD_STRATEGY_KEY }                                               from 'src/app/global-cd-strategy.const';
import { COMPONENTS_STRUCTURE_CONFIG }                                          from './components-structure.config';

const changeDetectionStrategyKey: ChangeDetectionStrategiesEnum = GLOBAL_CD_STRATEGY_KEY || ChangeDetectionStrategiesEnum.Default;
const changeDetectionStrategy: ChangeDetectionStrategy = ChangeDetectionStrategy[changeDetectionStrategyKey];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: changeDetectionStrategy,
})
export class AppComponent {
  public changeDetectionStrategyKey: ChangeDetectionStrategiesEnum = changeDetectionStrategyKey;

  public COMPONENTS_STRUCTURE_CONFIG: typeof COMPONENTS_STRUCTURE_CONFIG = COMPONENTS_STRUCTURE_CONFIG;
  public GLOBAL_CD_STRATEGY_KEY: typeof GLOBAL_CD_STRATEGY_KEY = GLOBAL_CD_STRATEGY_KEY;
  public ChangeDetectionStrategiesEnum: typeof ChangeDetectionStrategiesEnum = ChangeDetectionStrategiesEnum;

  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private ngZone: NgZone,
  ) {
    this.ngZone.runOutsideAngular(() => {
      this.bindAppRefTickToKeyUp();
    });
  }

  private bindAppRefTickToKeyUp(): void {
    fromEvent<KeyboardEvent>(document, 'keyup').pipe(
      filter((event: KeyboardEvent) => event.keyCode === 192/* ` */),
    ).subscribe(
      () => {
        this.applicationRef.tick();
      },
    );
  }
}
