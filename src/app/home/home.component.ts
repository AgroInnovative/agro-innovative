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
  companyName = 'PureAgro';
  companyLogo = 'assets/img/logo.png';
  joinEcoSystemImg = 'assets/img/ecosystem.png';
  ecoSystemImg = [
    'assets/img/icons/agriculture_expertise.png',
    'assets/img/icons/documentation.png',
    'assets/img/icons/cloud_platform.png',
    'assets/img/icons/cloud_platform.png',
  ];

  teamMembers = [
    {
      name: 'Lilan Udayanga',
      position: 'Management Undergraduate',
      avatar: 'assets/img/team/lilan.png',
    },
    {
      name: 'Mihindu Ranasinghe',
      position: 'Software Engineering Undergraduate',
      avatar: 'assets/img/team/mihindu.png',
    },
    {
      name: 'Pankajan Satkunam',
      position: 'Software Engineering Undergraduate',
      avatar: 'assets/img/team/pankajan.png',
    },
    {
      name: 'Zeena Youhan',
      position: 'Software Engineering Undergraduate',
      avatar: 'assets/img/team/zeena.png',
    },
    {
      name: 'Sanjula Karunarathne',
      position: 'Software Engineering Undergraduate',
      avatar: 'assets/img/team/sanjula.jpg',
    },
  ];
}
