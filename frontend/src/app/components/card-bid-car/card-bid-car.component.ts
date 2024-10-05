import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardTitle, IonButton, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-bid-car',
  templateUrl: './card-bid-car.component.html',
  styleUrls: ['./card-bid-car.component.scss'],
  imports: [IonItem, IonButton, IonCardTitle, IonCard, IonCardContent],
  standalone: true
})
export class CardBidCarComponent implements OnInit {

  @Input() title: string = ""
  @Input() Kilometres: string = ""
  @Input() Damage: string = ""
  @Input() Location: string = ""
  @Input() Date_Bid: string = ""
  @Input() Status: string = ""
  @Input() Price: string = ""
  @Input() Images: any = []

  constructor() { }

  ngOnInit(){
    this.showImages()
  }

  showImages(){
    console.log(this.Images)

  }

}
