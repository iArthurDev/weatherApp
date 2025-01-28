import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherCardComponent, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  city: string = '';
  code: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}
}
