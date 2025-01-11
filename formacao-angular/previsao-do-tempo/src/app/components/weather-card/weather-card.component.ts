import { Component, Input, OnInit } from '@angular/core';
import { IWeatherData } from '../../models/interfaces/IWeatherData';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoBlockDetailsComponent } from '../info-block-details/info-block-details.component';

@Component({
  selector: 'app-weather-card',
  imports: [
    CommonModule, FontAwesomeModule,
    InfoBlockDetailsComponent
  ],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss'
})
export class WeatherCardComponent {

  // Dados da previsao do tempo recebidos pelo componente Pai
  @Input() weatherDataCard!: IWeatherData;

  minTemperaturaIcon = faTemperatureLow;
  maxTemperaturaIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;


}
