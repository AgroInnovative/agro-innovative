import { Component, OnInit } from '@angular/core';
import {
  fade,
  slide,
  slideBounceOut,
  bounceOutLeftAnimation,
  fadeInAnimation,
} from './../common/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fade, slide],
})
export class HomeComponent {
  companyName = 'ELZIAN AGRO';
  companyLogo = 'assets/img/logo.png';
  joinEcoSystemImg = 'assets/img/ecosystem.png';
  ecoSystemImg = [
    'assets/img/icons/agriculture_expertise.png',
    'assets/img/icons/documentation.png',
    'assets/img/icons/cloud_platform.png',
    'assets/img/icons/cloud_platform.png',
  ];
}
