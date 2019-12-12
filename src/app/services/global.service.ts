import { Injectable }      from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GlobalService {
  public globalObservable$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
  ) {
  }
}
