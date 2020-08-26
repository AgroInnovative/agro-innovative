import { Component, OnInit } from '@angular/core';
import {
  fade,
  slide,
  slideBounceOut,
  bounceOutLeftAnimation,
  fadeInAnimation,
} from '../../common/animations';

@Component({
  selector: 'partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
  animations: [fade, slide],
})
export class PartnersComponent implements OnInit {
  companyName = 'ELZIAN AGRO';
  // joinEcoSystemImg = 'assets/img/ecosystem.png';
  joinEcoSystemImg = 'assets/img/partners/eco-system.png';
  partners = [
    {
      partnerName: 'Metiorology Department',
      // logo: 'assets/img/partners/metiorology.png',
      logo: 'assets/img/partners/moa.JPG',
    },
    {
      partnerName: 'Rice Research Development Institute',
      // logo: 'assets/img/partners/heyleys.png',
      logo: 'assets/img/partners/rrdi.JPG',
    },
    {
      partnerName: 'Tea research Istitute',
      // logo: 'assets/img/partners/agr-department.png',
      logo: 'assets/img/partners/trc.JPG',
    },

    {
      partnerName: 'Fruit Crops research And Development Center',
      // logo: 'assets/img/partners/agr-department.png',
      logo: 'assets/img/partners/fcri.JPG',
    },
    {
      partnerName: 'Department Of Meteorology',
      // logo: 'assets/img/partners/agr-department.png',
      logo: 'assets/img/partners/dom.png',
    },
    {
      partnerName: 'Horticultural Crops and Research Centre',
      // logo: 'assets/img/partners/agr-department.png',
      logo: 'assets/img/partners/htcr.JPG',
    },
    // {
    //   partnerName: 'Generation Unlimited',
    //   // logo: 'assets/img/partners/agr-department.png',
    //   logo: 'assets/img/partners/genu.jpg',
    // },
    // {
    //   partnerName: 'UNDP',
    //   // logo: 'assets/img/partners/agr-department.png',
    //   logo: 'assets/img/partners/undp.jpg',
    // },
    // {
    //   partnerName: 'UNICEF',
    //   // logo: 'assets/img/partners/agr-department.png',
    //   logo: 'assets/img/partners/unicef.jpg',
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
}
