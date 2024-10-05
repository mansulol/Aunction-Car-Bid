import { Component } from '@angular/core';
import { IonItem, IonHeader, IonTitle, IonToolbar, IonInput, IonSearchbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [IonInput, IonToolbar, IonTitle, IonItem, IonHeader, IonSearchbar],
  standalone: true
})
export class NavbarComponent  {

  constructor() { }

}
