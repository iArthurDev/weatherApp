import { Component, OnInit } from '@angular/core';
import { WeatherCardComponent } from '../../components/weather-card/weather-card.component';
import { DataSaveService } from '../../services/data-save.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [WeatherCardComponent, NgIf],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
})
export class DataComponent implements OnInit {
  weatherInfo: any;

  constructor(private dataService: DataSaveService) {}

  ngOnInit(): void {
    this.weatherInfo = this.dataService.getData();
    console.log('Informacion recibida');
    console.log(this.weatherInfo);
  }
}
