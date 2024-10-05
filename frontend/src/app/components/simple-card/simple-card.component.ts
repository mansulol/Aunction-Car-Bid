import { Component, Input } from '@angular/core';
import { IonCard, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
  imports: [IonItem, IonCard],
  standalone: true
})
export class SimpleCardComponent {
  @Input() img: string = "";
  @Input() titleCard: string = "";
  @Input() count: string = "";


  constructor() { }

}
