import {
  trigger,
  transition,
  state,
  style,
  animate,
  keyframes,
  animation,
  useAnimation,
} from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
  state(
    'collapsed',
    style({
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      overflow: 'hidden',
      //backgroundColor: 'yellow',
      opacity: 0,
    })
  ),
  // state(
  //   'expanded',
  //   style({
  //     height: '*',
  //     paddingTop: '*',
  //     paddingBottom: '*',
  //     overflow: 'auto',
  //   })
  // ),

  //transition('collapsed=>expanded', [animate('300ms ease-out')]),
  //transition('expanded=>collapsed', [animate('300ms ease-in')]),

  transition('collapsed=>expanded', [
    animate(
      '200ms ease-out',
      style({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*',
      })
    ),
    animate('1s', style({ opacity: 1 })),
  ]),
  transition('expanded=>collapsed', [animate('300ms ease-in')]),
]);
