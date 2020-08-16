import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-section',
  templateUrl: './weather-section.component.html',
  styleUrls: ['./weather-section.component.css'],
})
export class WeatherSectionComponent implements OnInit {
  weatherImage1 = 'assets/img/weather/weather1.JPG';
  weatherImage2 = 'assets/img/agro-dashboard/agro-dashboard1.jpg';
  weatherImage3 = 'assets/img/weather/weather2.png';
  weatherImage4 = 'assets/img/agro-dashboard/agro-dashboard-2.png';
  constructor() {}

  ngOnInit(): void {}
}
