import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = '26094838ce93e0127b16a73a4b50f564';
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  //Función para obtener datos de una ciudad
  getWeather(cityName: String, countryCode: String): Observable<any> {
    const url = `${this.baseUrl}?q=${cityName},${countryCode}&units=metric&appid=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
