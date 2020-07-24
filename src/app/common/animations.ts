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

export let fadeInAnimation = animation(
  [style({ opacity: 0 }), animate('{{ duration }} {{ easing }}')],
  {
    params: {
      //default values
      duration: '2.5s',
      easing: 'ease-out',
    },
  }
);
export let fadeOutAnimation = animation([animate(2000), style({ opacity: 0 })]);

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),

  transition(':enter', [useAnimation(fadeInAnimation)]),
  transition(':leave', [useAnimation(fadeOutAnimation)]),
]);

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)' }),
    animate(1500, style({ transform: 'translateX(0px)' })),
  ]),
  transition(':leave', [
    //animate(500, style({ transform: 'translateX(-100%)' })), //Linear speed
    //animate('0.3s ease-in', style({ transform: 'translateX(-100%)' })), //Ease in speed
    animate(
      //custom speed
      '0.5s cubic-bezier(.61, .29, .07, 1.02)',
      style({ transform: 'translateX(-100%)' })
    ),
  ]),
]);

export let bounceOutLeftAnimation = animation(
  //create a reusable animation
  animate(
    '0.5s ease-out',
    keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        transform: 'translateX(20px)',
      }),
      style({
        offset: 1,
        opacity: 0,
        transform: 'translateX(-100%)',
      }),
    ])
  )
);

//Complex animations using keyframe (Use animate.css keyframes to develop these kind of things)
export let slideBounceOut = trigger('slideBounceOut', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)' }),
    animate(500, style({ transform: 'translateX(0px)' })),
  ]),
  transition(':leave', [useAnimation(bounceOutLeftAnimation)]),
]);
