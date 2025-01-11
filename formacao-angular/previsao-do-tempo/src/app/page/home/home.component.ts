import { IWeatherData } from './../../models/interfaces/IWeatherData';
import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherCardComponent } from "../../components/weather-card/weather-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    FontAwesomeModule, WeatherCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();

  cidadeInicial = "Patrocínio do Muriaé";
  weatherDatas!: IWeatherData;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherDatas(this.cidadeInicial)
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response);
          console.log(response);
        },
        error: (error) => console.log(error),
      })
  }

  onSubmit(): void {
    this.getWeatherDatas(this.cidadeInicial);
    this.cidadeInicial = '';
  }

  // Evitando vazamento de memória - Memory Leak
  ngOnDestroy(): void {
    this.destroy$.next(); 
    this.destroy$.complete();
  }

  location = this.cidadeInicial;
  temperature = '28°C';
  description = 'Céu limpo';
  icon = 'https://img.icons8.com/ios/50/ffffff/sun.png';

}
