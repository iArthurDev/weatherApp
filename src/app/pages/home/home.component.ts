import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherCardComponent } from '../../components/weather-card/weather-card.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { DataSaveService } from '../../services/data-save.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WeatherCardComponent, NgIf, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  city: string = '';
  code: string = '';
  weatherData: any;
  weatherToShare: any;

  constructor(
    private weatherService: WeatherService,
    private dataService: DataSaveService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.weatherService.getWeather('sonora', 'mx').subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  getWeatherData(city: string, code: string): void {
    if (!city || !code) {
      alert('Please, insert some values.');
      this.weatherData = null;
      return;
    } else {
      this.weatherService.getWeather(city, code).subscribe(
        (res) => {
          this.weatherData = res;
          this.dataService.setData(res);

          console.log(this.weatherData);

          this.city = '';
          this.code = '';
        },
        (err) => {
          alert('An error occurred while searching.' + err);
          console.log(err);
        }
      );
    }
  }
}
