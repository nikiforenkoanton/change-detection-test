import { animate, state, style, transition, trigger } from '@angular/animations';

export const blinkAnimation = trigger('blinkAnimation', [
  state('*', style({
    backgroundColor: 'white'
  })),
  transition('* => *', [
    animate('0.5s', style({
      backgroundColor: 'yellow'
    }))
  ]),
]);
