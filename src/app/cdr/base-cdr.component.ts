import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectorRef,
  DoCheck,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  NgZone,
  Output,
  Renderer2
}                                        from '@angular/core';
import { BehaviorSubject }               from 'rxjs';
import { ChangeDetectionStrategiesEnum } from 'src/app/enums/change-detection-strategies.enum';
import { GLOBAL_CD_STRATEGY_KEY }        from 'src/app/global-cd-strategy.const';
import { ComponentsStructureModel }      from 'src/app/models/components-structure.model';
import { GlobalService }                 from 'src/app/services/global.service';

export abstract class BaseCdrComponent implements AfterViewInit, DoCheck {
  @Output() public event: EventEmitter<void> = new EventEmitter<void>();

  @Input() public componentsStructure: ComponentsStructureModel;
  @Input() public inputValue: number;

  private changeDetectorRef: ChangeDetectorRef;
  private applicationRef: ApplicationRef;
  private renderer2: Renderer2;
  private elementRef: ElementRef;
  private ngZone: NgZone;
  private globalService: GlobalService;

  private timeoutHandle: number;
  private nativeElement: HTMLElement;

  public GLOBAL_CD_STRATEGY_KEY: typeof GLOBAL_CD_STRATEGY_KEY = GLOBAL_CD_STRATEGY_KEY;
  public ChangeDetectionStrategiesEnum: typeof ChangeDetectionStrategiesEnum = ChangeDetectionStrategiesEnum;

  public counter: number = 0;
  public ngDoCheckCounter: number = 0;
  public childInputValue: number = 0;
  public inputNgModel: string = '';
  public purePipeValue: number = 0;
  public asyncPipeValue$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public abstract changeDetectionStrategyKey: ChangeDetectionStrategiesEnum;

  constructor(
    injector: Injector,
  ) {
    this.changeDetectorRef = injector.get(ChangeDetectorRef);
    this.applicationRef = injector.get(ApplicationRef);
    this.renderer2 = injector.get(Renderer2);
    this.elementRef = injector.get(ElementRef);
    this.ngZone = injector.get(NgZone);
    this.globalService = injector.get(GlobalService);
    this.nativeElement = this.elementRef.nativeElement;
  }

  public ngAfterViewInit(): void {
    this.renderer2.addClass(this.nativeElement, this.changeDetectionStrategyKey);
  }

  public ngDoCheck(): void {
    this.ngDoCheckCounter++;
  }

  public get getCounter(): number {
    this.animateBackground();
    return this.counter++;
  }

  public emitEvent(): void {
    this.event.emit();
  }

  public increaseChildInput(): void {
    this.childInputValue++;
  }

  public increaseCounter(): void {
    this.counter++;
  }

  public increasePurePipeInputValue(): void {
    this.purePipeValue++;
  }

  public increaseAsyncPipeValue(): void {
    this.asyncPipeValue$.next(this.asyncPipeValue$.value + 1);
  }

  public increaseGlobalObservableValue(): void {
    this.globalService.globalObservable$.next(this.globalService.globalObservable$.value + 1);
  }

  public triggerTimeout(): void {
    setTimeout(() => {
    }, 1000);
  }

  public applicationRefTick(): void {
    this.applicationRef.tick();
  }

  public markForCheck(): void {
    this.changeDetectorRef.markForCheck();
  }

  public detectChanges(): void {
    this.changeDetectorRef.detectChanges();
  }

  public onEvent(): void {
  }

  private animateBackground(): void {
    this.setBackground();
    this.resetBackgroundWithDelay();
  }

  private setBackground(): void {
    this.renderer2.setStyle(this.nativeElement, 'background-color', 'yellow');
  }

  private resetBackgroundWithDelay(): void {
    this.ngZone.runOutsideAngular(() => {
      clearTimeout(this.timeoutHandle);
      this.timeoutHandle = setTimeout(() => {
        this.renderer2.setStyle(this.nativeElement, 'background-color', '');
      }, 200);
    });
  }
}
