import { Component, computed, signal } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { WeatherServiceService } from '../../service/weather-service.service';
import { WeatherData } from '../../models/weatherData.model';


@Component({
  selector: 'app-weather',
  standalone: false,
  
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  city: string = ''; 
  weather$!: Observable<any>; 

  weatherSignal = signal<WeatherData | null>(null);
  temperature = computed(() => this.weatherSignal()?.main?.temp ?? 'N/A'); // when signal changes the computed properites automatically changes //remember to use computed
  weatherCondition = computed(() => this.weatherSignal()?.weather?.[0]?.description ?? 'N/A');


  constructor(private weatherService: WeatherServiceService) {}

  getWeather() {
    this.weather$ = this.weatherService.getWeather(this.city);

    this.weather$.subscribe((data) => {
      this.weatherSignal.set(data);
    });

    forkJoin({
      weatherData: this.weatherService.getWeather(this.city),
      additionalData: this.weatherService.getAdditionalWeatherData(this.city) //you cant use . on observable as it assume it to be asynchronous
    }).subscribe((data) => {
      console.log(data); 
      this.weatherSignal.set(data.weatherData);
    });
  }
}
