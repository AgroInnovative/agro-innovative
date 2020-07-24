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
  companyName = 'ApexAgro';

  partners = [
    {
      partnerName: 'Agricultural Department',
      logo: '../../assets/img/partners/agr-department.png',
    },
    {
      partnerName: 'Heyleys Agro Company',
      logo: '../../assets/img/partners/heyleys.png',
    },
    {
      partnerName: 'Metiorology Department',
      logo: '../../assets/img/partners/metiorology.png',
    },
  ];

  teamMembers = [
    {
      name: 'Lilan Udayanga',
      position: 'Management Undergraduate',
      avatar: '../../assets/img/team/lilan.png',
    },
    {
      name: 'Mihindu Ranasinghe',
      position: 'Software Engineering Undergraduate',
      avatar: '../../assets/img/team/mihindu.png',
    },
    {
      name: 'Pankajan Satkunam',
      position: 'Software Engineering Undergraduate',
      avatar: '../../assets/img/team/pankajan.png',
    },
    {
      name: 'Zeena Ranasinghe',
      position: 'Software Engineering Undergraduate',
      avatar: '../../assets/img/team/zeena.png',
    },
    {
      name: 'Sanjula Karunarathne',
      position: 'Software Engineering Undergraduate',
      avatar: '../../assets/img/team/sanjula.jpg',
    },
  ];
}
