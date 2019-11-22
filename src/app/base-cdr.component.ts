import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectorRef,
  DoCheck,
  ElementRef,
  EventEmitter, HostBinding,
  Injector,
  Input,
  NgZone,
  Output,
  Renderer2
} from '@angular/core';
import { BehaviorSubject }               from 'rxjs';
import { ChangeDetectionStrategiesEnum } from 'src/app/enums/change-detection-strategies.enum';

export abstract class BaseCdrComponent implements AfterViewInit, DoCheck {
  @Output() public event: EventEmitter<void> = new EventEmitter<void>();

  @Input() public inputValue: number;

  private changeDetectorRef: ChangeDetectorRef;
  private applicationRef: ApplicationRef;
  private renderer2: Renderer2;
  private elementRef: ElementRef;
  private ngZone: NgZone;

  private timeoutHandle: number;
  private nativeElement: HTMLElement;

  public counter: number = 0;
  public ngDoCheckCounter: number = 0;
  public childInputValue: number = 0;
  public inputNgModel: string = '';
  public impurePipeValue: number = 0;
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
    this.nativeElement = this.elementRef.nativeElement;
  }

  public ngAfterViewInit(): void {
    this.addEventListeners();
    this.renderer2.addClass(this.nativeElement, this.changeDetectionStrategyKey);
  }

  private addEventListeners(): void {
    this.ngZone.runOutsideAngular(() => {
      // emitEvent
      this.renderer2.listen(
        this.nativeElement.querySelector('.emitEvent'),
        'click',
        () => {
          this.emitEvent();
        }
      );

      // // increaseChildInput
      // this.renderer2.listen(
      //   this.nativeElement.querySelector('.increaseChildInput'),
      //   'click',
      //   () => {
      //     this.increaseChildInput();
      //   }
      // );
    });
  }

  public ngDoCheck(): void {
    this.ngDoCheckCounter++;
  }

  public get getCounter(): number {
    this.setBackground();
    return this.counter++;
  }

  public emitEvent(): void {
    this.ngZone.run(() => {
      this.event.emit();
    });
  }

  public increaseChildInput(): void {
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

  public increaseAsyncPipeValueWithDelay(): void {
    setTimeout(() => {
      this.asyncPipeValue$.next(this.asyncPipeValue$.value + 1);
    }, 2000);
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

  public onEvent(): void {
  }

  private setBackground(): void {
    this.renderer2.setStyle(this.nativeElement, 'background-color', 'yellow');
    this.resetBackground();
  }

  private resetBackground(): void {
    this.ngZone.runOutsideAngular(() => {
      clearTimeout(this.timeoutHandle);
      this.timeoutHandle = setTimeout(() => {
        this.renderer2.setStyle(this.nativeElement, 'background-color', '');
      }, 500);
    });
  }
}
