import { Component, OnInit } from '@angular/core';
import {
  fade,
  slide,
  slideBounceOut,
  bounceOutLeftAnimation,
  fadeInAnimation,
} from './../common/animations';

@Component({
  selector: 'partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
  animations: [fade, slide],
})
export class PartnersComponent implements OnInit {
  companyName = 'ApexAgro';
  joinEcoSystemImg = 'assets/img/ecosystem.png';
  partners = [
    {
      partnerName: 'Agricultural Department',
      logo: 'assets/img/partners/agr-department.png',
    },
    {
      partnerName: 'Heyleys Agro Company',
      logo: 'assets/img/partners/heyleys.png',
    },
    {
      partnerName: 'Metiorology Department',
      logo: 'assets/img/partners/metiorology.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
