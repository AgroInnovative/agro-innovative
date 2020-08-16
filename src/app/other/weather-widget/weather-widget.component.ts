import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
})
export class WeatherWidgetComponent implements OnInit {
  weatherData: any;
  apiKey = 'db5cbc5311cf00384e30edd6fb5f6561';
  city = 'eheliyagoda';
  constructor() {}

  ngOnInit(): void {
    this.weatherData = {
      main: {},
      isDay: true,
    };
    this.getWeatherData();
  }

  getWeatherData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.setWeatherData(data));
  }

  setWeatherData(data) {
    this.weatherData = data;
    console.log(this.weatherData);

    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();

    this.weatherData.isDay = currentDate.getTime() < sunsetTime.getTime();

    this.weatherData.temp_celcius = (
      this.weatherData.main.temp - 273.15
    ).toFixed(0);
    this.weatherData.temp_min = (
      this.weatherData.main.temp_min - 273.15
    ).toFixed(0);
    this.weatherData.temp_max = (
      this.weatherData.main.temp_max - 273.15
    ).toFixed(0);
    this.weatherData.temp_feels_like = (
      this.weatherData.main.feels_like - 273.15
    ).toFixed(0);
  }
}
