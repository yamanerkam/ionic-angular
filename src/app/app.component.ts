import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IonApp, IonRouterOutlet, IonContent, IonTitle, IonToolbar, IonHeader, IonLabel, IonIcon, IonTabBar, IonTabs, IonTabButton, IonButton, IonInput, IonItem, IonAlert } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
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
  api = 'b12e78acc7233683cbb28f56edc816fb';
  cityName = '';
  url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.api}&units=metric`;

  inputValue: string = '';
  weatherData: any;

  constructor(private http: HttpClient) { }


  getWeatherData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  handleButtonClick() {
    console.log(this.inputValue);
    this.cityName = this.inputValue;
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.api}&units=metric`;
    this.getWeatherData().subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }


}
