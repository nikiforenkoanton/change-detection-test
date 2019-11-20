import { ApplicationRef, ChangeDetectorRef, DoCheck, EventEmitter, Injector, Input, Output } from '@angular/core';
import { ChangeDetectionStrategiesEnum }                                                     from 'src/app/enums/change-detection-strategies.enum';

export abstract class BaseCdrComponent implements DoCheck {
  @Output() public emitEvent: EventEmitter<void> = new EventEmitter<void>();

  @Input() public inputValue: number;

  public counter: number = 0;
  public ngDoCheckCounter: number = 0;
  public childInputValue: number = 0;
  public inputNgModel: string = '';
  public impurePipeValue: number = 0;
  public purePipeValue: number = 0;

  public changeDetectorRef: ChangeDetectorRef;
  public applicationRef: ApplicationRef;
  public abstract changeDetectionStrategyKey: ChangeDetectionStrategiesEnum;

  constructor(
    injector: Injector,
  ) {
    this.changeDetectorRef = injector.get(ChangeDetectorRef);
    this.applicationRef = injector.get(ApplicationRef);
  }

  public ngDoCheck(): void {
    this.ngDoCheckCounter++;
  }

  public get getCounter(): number {
    return this.counter++;
  }

  public triggerClickEvent(): void {
  }

  public emitEventWithDelay(): void {
    setTimeout(() => {
      this.emitEvent.emit();
    }, 2000);
  }

  public increaseChildInputValue(): void {
    this.childInputValue++;
  }

  public increaseCounter(): void {
    this.counter++;
  }

  public increaseImPurePipeInputValue(): void {
    this.impurePipeValue++;
  }

  public increasePurePipeInputValue(): void {
    this.purePipeValue++;
  }

  public triggerTimeout(): void {
    setTimeout(() => {
    }, 2000);
  }

  public applicationRefTickWithDelay(): void {
    setTimeout(() => {
      this.applicationRef.tick();
    }, 2000);
  }

  public markForCheckWithDelay(): void {
    setTimeout(() => {
      this.changeDetectorRef.markForCheck();
    }, 2000);
  }

  public detectChangesWithDelay(): void {
    setTimeout(() => {
      this.changeDetectorRef.detectChanges();
    }, 2000);
  }

  public onEmitEvent(): void {
  }
}
