import { Component, OnInit } from '@angular/core';
import {
  fade,
  slide,
  slideBounceOut,
  bounceOutLeftAnimation,
  fadeInAnimation,
} from './../common/animations';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fade, slide],
})
export class AboutComponent implements OnInit {
  companyName = 'ELZIAN AGRO';
  companyLogo = 'assets/img/logo.png';
  constructor() {}

  ngOnInit(): void {}
}
