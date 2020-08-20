import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/user.service';
import { AppUser } from 'src/app/common/models/app-user';
import { Router } from '@angular/router';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
})
export class WeatherWidgetComponent implements OnInit {
  today = 0;
  day5 = 39;
  isMore: boolean = false;
  seeMoreButtonText: string = 'See More';
  btnColor: string = 'btn-danger';

  appUser: AppUser;
  weatherData: any;
  forecastedWeatherData: any;
  forecastedWeatherDataCleanedForML = {
    forecastedWeather: {
      temperature: 1,
      windSpeed: '',
      humidity: '',
      visibility: '',
      pressure: '',
    },
  };
  uid;

  apiKey = 'db5cbc5311cf00384e30edd6fb5f6561';
  city;

  constructor(
    public auth: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // window.location.href = 'dashboard';
    // event.preventDefault();

    this.auth.appUser$.subscribe((appUser) => (this.appUser = appUser));
    // console.log(auth.userId);
    this.uid = this.auth.userId;
    this.city = this.userService.city;

    this.weatherData = {
      main: {},
      isDay: true,
    };

    // this.getCurrentWeatherData();
    this.getForecastedWeatherData();
    this.sendWeatherDataToDBForML();
  }

  // getCurrentWeatherData() {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => this.setWeatherData(data));
  // }

  getForecastedWeatherData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.setWeatherData(data));
  }

  setWeatherData(data) {
    this.weatherData = data;
    console.log(data);
    for (var i = 0; i < this.weatherData.list.length; i++) {
      let sunsetTime = new Date(this.weatherData.city.sunset * 1000);
      this.weatherData.list[i].sunset_time = sunsetTime.toLocaleTimeString();
      let currentDate = new Date();

      this.weatherData.list[i].isDay =
        currentDate.getTime() < sunsetTime.getTime();

      this.weatherData.list[i].temp_celcius = (
        this.weatherData.list[i].main.temp - 273.15
      ).toFixed(0);
      this.weatherData.list[i].temp_min = (
        this.weatherData.list[i].main.temp_min - 273.15
      ).toFixed(0);
      this.weatherData.list[i].temp_max = (
        this.weatherData.list[i].main.temp_max - 273.15
      ).toFixed(0);
      this.weatherData.list[i].temp_feels_like = (
        this.weatherData.list[i].main.feels_like - 273.15
      ).toFixed(0);
    }

    // For ML Model
    this.forecastedWeatherDataCleanedForML.forecastedWeather.temperature =
      this.weatherData.list[this.day5].main.temp - 273.15;

    this.forecastedWeatherDataCleanedForML.forecastedWeather.humidity = this.weatherData.list[
      this.day5
    ].main.humidity;

    this.forecastedWeatherDataCleanedForML.forecastedWeather.windSpeed = this.weatherData.list[
      this.day5
    ].wind.speed;

    this.forecastedWeatherDataCleanedForML.forecastedWeather.visibility = this.weatherData.list[
      this.day5
    ].visibility;

    this.forecastedWeatherDataCleanedForML.forecastedWeather.pressure = this.weatherData.list[
      this.day5
    ].main.pressure;
  }

  moreWeather() {
    this.isMore = !this.isMore;
    if (this.isMore) {
      this.seeMoreButtonText = 'Collapse';
      this.btnColor = 'btn-success';
    } else {
      this.seeMoreButtonText = 'See More';
      this.btnColor = 'btn-danger';
    }
  }

  async sendWeatherDataToDBForML() {
    console.log(this.forecastedWeatherDataCleanedForML);

    if (this.uid)
      await this.userService.update(
        this.uid,
        this.forecastedWeatherDataCleanedForML
      );
    else alert('User not found');
    // window.location.href = 'https://elzian.com';
    // window.location.href =
    //   'https://elzianagro.herokuapp.com/pestPrediction/' + this.uid;
    // event.preventDefault();

    // this.router.navigate(['/edit-profile']);
    // this.router.navigateByUrl('elzian.com');
  }

  // this.weatherData = data;
  // console.log(this.weatherData);

  // let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
  // this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
  // let currentDate = new Date();

  // this.weatherData.isDay = currentDate.getTime() < sunsetTime.getTime();

  // this.weatherData.temp_celcius = (
  //   this.weatherData.main.temp - 273.15
  // ).toFixed(0);
  // this.weatherData.temp_min = (
  //   this.weatherData.main.temp_min - 273.15
  // ).toFixed(0);
  // this.weatherData.temp_max = (
  //   this.weatherData.main.temp_max - 273.15
  // ).toFixed(0);
  // this.weatherData.temp_feels_like = (
  //   this.weatherData.main.feels_like - 273.15
  // ).toFixed(0);
}
