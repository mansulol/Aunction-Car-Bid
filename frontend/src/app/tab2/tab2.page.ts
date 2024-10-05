import { Component, OnInit } from '@angular/core';
import { GetDataServiceService } from '../services/getDataService/get-data-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  bids: any = []
  cars: any = []
  images: any = []

  combinedData: any = []

  ids_bids: any = []
  ids_cars: any = []
  ids_imgs_cars: any = []

  constructor( private getDataService: GetDataServiceService ) {}

  ngOnInit(){
    this.getBidsData()
  }

  combineData(){
    for (let i = 0; i < this.bids.length; i++) {
      this.combinedData.push({
        bid: this.bids[i],
        car: this.cars[i],
        image: this.images[i],
      });
    }
  }

  getBidsData(){
    this.getDataService.getBidsHttp().subscribe((data => {
      if( data === null ){
        console.log("Db not sync")
      }else{
        this.bids = data

        // let formatedDate = this.bids.Date_bid
        // this.bids.Date_bid = this.bids.Date_bid.substring(0, formatedDate.indexOf('T'))
        console.log("Bids data arrived", this.bids)

        for(const bids of this.bids){
          this.ids_bids.push(bids.Id_bid)
        }
      }

    }))

    this.getCarsData()
  }

  getCarsData(){
    this.getDataService.getCarsHttp().subscribe((data => {
      if( data === null ){
        console.log("Db not sync")
      }else{
        this.cars = data
        console.log("Cars data arrived", this.cars)

        for(const car of this.cars){
          this.ids_bids.push(car.Id_car)
        }
      }
    }))

    this.getImagesData()
  }

  getImagesData(){
    this.getDataService.getImagesHttp().subscribe((data => {
      if( data === null ){
        console.log("Db not sync")
      }else{
        this.images = data
        console.log("Images data arrived", this.images)

        for(const img of this.images){
          this.ids_bids.push(img.Id_imgs_cars)
        }

        this.combineData()
      }
    }))
  }

}
