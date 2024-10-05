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

  @Input() DataInput: any = []
  Data: any = []
  imgInput: any = []

  constructor() { }

  ngOnInit(){
    this.Data = this.DataInput
    this.imgInput = this.Data.Images

    this.showImages()
  }

  showImages(){

    console.log(this.Data)

  }

}
