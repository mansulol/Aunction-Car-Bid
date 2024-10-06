import { Component, input, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonButton,
  IonItem,
  IonIcon,
} from '@ionic/angular/standalone';
import { DeleteDataServiceService } from 'src/app/services/deleteDataService/delete-data-service.service';

@Component({
  selector: 'app-card-bid-car',
  templateUrl: './card-bid-car.component.html',
  styleUrls: ['./card-bid-car.component.scss'],
  imports: [
    CommonModule,
    IonIcon,
    IonItem,
    IonButton,
    IonCardTitle,
    IonCard,
    IonCardContent,
  ],
  standalone: true,
})
export class CardBidCarComponent implements OnInit {
  @Input() DataInput: any = [];
  @Input() showTrash: boolean = false
  @Input() showBtn: boolean = true
  trash: boolean = false;
  Data: any = [];
  imgInput: any = [];

  constructor(private deleteData: DeleteDataServiceService) {}

  ngOnInit() {
    this.Data = this.DataInput;
    this.imgInput = this.Data.Images;
    this.showTrash ? this.trash = this.Data.bid.Uploaded ? true : false: ""

    this.showImages();
  }

  showImages() {
    console.log(this.Data);
  }

  deleteBid() {
    this.deleteData
      .delete(
        this.Data.image.Id_img_car,
        this.Data.car.Id_car,
        this.Data.bid.Id_bid
      )
      .then((res) => {
        console.log('Bid eliminated')
        this.Data = res
      });
  }
}
