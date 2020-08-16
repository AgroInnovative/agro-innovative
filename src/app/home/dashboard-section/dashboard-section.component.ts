import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-section',
  templateUrl: './dashboard-section.component.html',
  styleUrls: ['./dashboard-section.component.css'],
})
export class DashboardSectionComponent implements OnInit {
  dashboardImage1 = 'assets/img/agro-dashboard/agro-dashboard5.png';
  dashboardImage2 = 'assets/img/phone1.jpg';
  dashboardImage3 = 'assets/img/agro-farm.png';
  dashboardImage4 = 'assets/img/agro-dashboard/agro-dashboard.png';
  constructor() {}

  ngOnInit(): void {}
}
