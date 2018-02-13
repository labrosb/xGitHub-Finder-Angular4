import { trigger, transition, group, query, style, animate } from '@angular/animations';

export const slideScreens =
  trigger('routeAnimation', [
          transition('1 => 2', [
              style({ height: '!' }),
              query(':enter', style({ transform: 'translateX(100%)' })),
              query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
              // animate the leave page away
              group([
                  query(':leave', [
                      animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
                  ]),
                  // and now reveal the enter
                  query(':enter', animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
              ]),
          ]),
          transition('2 => 1', [
              style({ height: '!' }),
              query(':enter', style({ transform: 'translateX(-100%)' })),
              query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
              // animate the leave page away
              group([
                  query(':leave', [
                      animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
                  ]),
                  // and now reveal the enter
                  query(':enter', animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
              ]),
          ]),
      ]);
