import { Component, OnInit } from '@angular/core';
import { GetDataServiceService } from '../services/getDataService/get-data-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  bids: any = [];
  cars: any = [];
  images: any = [];

  combinedData: any = [];

  ids_bids: any = [];
  ids_cars: any = [];
  ids_imgs_cars: any = [];

  constructor(private getDataService: GetDataServiceService) { }

  ngOnInit() {
    try {
      this.getData().then(() => {
        this.combineData();
      });
    } catch (error) {
      console.log("Error in get data: ", error);
    }
  }

  async getData(): Promise<boolean> {
    try {
      await this.getBidsData();
      await this.getCarsData();
      await this.getImagesData();
      return true;
    } catch (error) {
      console.error("Error fetching data:", error);
      return false;
    }
  }

  combineData() {
    for (let i = 0; i < this.bids.length; i++) {
      this.combinedData.push({
        bid: this.bids[i],
        car: this.cars[i],
        image: this.images[i],
      });
    }
    console.log("Combined data:", this.combinedData);
  }

  getBidsData() {
    return new Promise<void>((resolve, reject) => {
      this.getDataService.getBidsHttp().subscribe({
        next: (data) => {
          if (data === null) {
            console.log("Db not sync");
            reject("No data for bids");
          } else {
            this.bids = data;
            console.log("Bids data arrived", this.bids);

            for (const bid of this.bids) {
              this.ids_bids.push(bid.Id_bid);
            }
            resolve();
          }
        },
        error: (err) => {
          console.error("Error fetching bids data:", err);
          reject(err);
        }
      });
    });
  }

  getCarsData() {
    return new Promise<void>((resolve, reject) => {
      this.getDataService.getCarsHttp().subscribe({
        next: (data) => {
          if (data === null) {
            console.log("Db not sync");
            reject("No data for cars");
          } else {
            this.cars = data;
            console.log("Cars data arrived", this.cars);

            for (const car of this.cars) {
              this.ids_cars.push(car.Id_car);
            }
            resolve();
          }
        },
        error: (err) => {
          console.error("Error fetching cars data:", err);
          reject(err);
        }
      });
    });
  }

  getImagesData() {
    return new Promise<void>((resolve, reject) => {
      this.getDataService.getImagesHttp().subscribe({
        next: (data) => {
          if (data === null) {
            console.log("Db not sync");
            reject("No data for images");
          } else {
            this.images = data;
            console.log("Images data arrived", this.images);

            for (const img of this.images) {
              this.ids_imgs_cars.push(img.Id_imgs_cars);
            }
            resolve();
          }
        },
        error: (err) => {
          console.error("Error fetching images data:", err);
          reject(err);
        }
      });
    });
  }
}
