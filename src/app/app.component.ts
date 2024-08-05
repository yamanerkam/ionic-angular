
type Weather = {
  name: string;
  temp: number;
  icon: string;
  desc: string;
};

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import {
  IonApp, IonRouterOutlet, IonContent, IonTitle, IonToolbar, IonHeader, IonLabel, IonIcon, IonTabBar, IonTabs, IonTabButton, IonButton, IonInput, IonItem, IonAlert, IonCardContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg
} from '@ionic/angular/standalone';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonImg, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonCardContent,
    CommonModule,
    IonAlert,
    FormsModule,
    IonItem,
    IonInput,
    IonButton,
    IonTabButton,
    IonTabs,
    IonTabBar,
    IonIcon,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonApp,
    IonRouterOutlet,
    HttpClientModule
  ],
})



export class AppComponent {
  error = false
  isData = false;
  temp: number | null = null;
  api = 'b12e78acc7233683cbb28f56edc816fb';
  cityName = '';
  url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.api}&units=metric`;

  errorMessage = new BehaviorSubject<string>('');

  inputValue: string = '';
  weatherData: Weather | null = null;

  constructor(private http: HttpClient) { }

  mathData(input: any) {
    Math.ceil(input)
    return Math.ceil(input)
  }



  getWeatherData(): Observable<any> {
    return this.http.get<any>(this.url);
  }


  async handleButtonClick() {
    this.isData = false
    this.errorMessage.next('')

    console.log('clicked');

    console.log('inside-try');

    if (this.inputValue === '') {
      this.error = true;
      this.errorMessage.next('Input is empty! Enter a City name!')

      return;
    }

    this.cityName = this.inputValue;
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.api}&units=metric`;

    this.getWeatherData().subscribe({
      next: (data) => {
        this.weatherData = {
          name: data.name,
          temp: this.mathData(data.main.temp),
          icon: data.weather[0].icon,
          desc: data.weather[0].description.toUpperCase()
        };
        this.isData = true;
      },
      error: (err) => {
        console.log('inside-error');
        console.log(err.message);
        this.errorMessage.next('Enter a valid City name!')
        this.error = true;
      }
    });
  }
}




