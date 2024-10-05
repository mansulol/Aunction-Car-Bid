import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataServiceService } from '../services/getDataService/get-data-service.service';

@Component({
  selector: 'app-tab-saves',
  templateUrl: './tab-saves.page.html',
  styleUrls: ['./tab-saves.page.scss'],
})
export class TabSavesPage implements OnInit {

  bids: any = []
  cars: any = []
  images: any = []

  combinedData: any = []

  constructor(private router: Router, private getData: GetDataServiceService ) { }

  ngOnInit(){
    this.getBidsData()
  }

  backToMeTab(){
    this.router.navigateByUrl("/tabs/tab3")
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
    this.getData.getBidsHttp().subscribe((data => {
      if( data === null ){
        console.log("Db not sync")
      }else{
        this.bids = data

        // let formatedDate = this.bids.Date_bid
        // this.bids.Date_bid = this.bids.Date_bid.substring(0, formatedDate.indexOf('T'))
        console.log("Bids data arrived", this.bids)
      }

    }))

    this.getCarsData()
  }

  getCarsData(){
    this.getData.getCarsHttp().subscribe((data => {
      if( data === null ){
        console.log("Db not sync")
      }else{
        this.cars = data
        console.log("Cars data arrived", this.cars)
      }
    }))

    this.getImagesData()
  }

  getImagesData(){
    this.getData.getImagesHttp().subscribe((data => {
      if( data === null ){
        console.log("Db not sync")
      }else{
        this.images = data
        console.log("Images data arrived", this.images)

        this.combineData()
      }
    }))
  }

}
