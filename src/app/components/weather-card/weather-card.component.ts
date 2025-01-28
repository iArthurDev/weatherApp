import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
})
export class WeatherCardComponent {
  @Input() weatherData: any;

  constructor(private router: Router) {}

  goToData() {
    this.router.navigate(['/data']);
  }
}
