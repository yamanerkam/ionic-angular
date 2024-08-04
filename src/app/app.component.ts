import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonApp, IonRouterOutlet, IonContent, IonTitle, IonToolbar, IonHeader, IonLabel, IonIcon, IonTabBar, IonTabs, IonTabButton, IonButton, IonInput, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [FormsModule, IonItem, IonInput, IonButton, IonTabButton, IonTabs, IonTabBar, IonIcon, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonApp, IonRouterOutlet],
})
export class AppComponent {
  inputValue: string = '';

  constructor() { }

  handleButtonClick() {
    console.log(this.inputValue);
  }
}