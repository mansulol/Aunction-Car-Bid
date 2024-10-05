import { Component } from '@angular/core';
import { IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton, IonCardHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-carrusel',
  templateUrl: './card-carrusel.component.html',
  styleUrls: ['./card-carrusel.component.scss'],
  imports: [IonCardHeader, IonButton, IonCardSubtitle, IonCardContent, IonCardTitle, IonCard],
  standalone: true
})
export class CardCarruselComponent{

  constructor() { }

}
