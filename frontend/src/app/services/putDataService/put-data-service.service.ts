import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PutDataServiceService {

  endpointBids: string = "http://localhost:8080/api/car_aunction/bids"
  endPointCars: string = ""
  endPointImgs: string = ""

  constructor(private httpClient: HttpClient) {}

  create( formData: any ) {
    const headers = new HttpHeaders({
      'content-type': 'aplication/x-www-form-urlencoded',
    });

    const id_bid = "B1234"
    const id_car = ""
    const id_img_car = ""

    // const dataBid = {
    //   Id_bid,
    //   Id_car,
    //   Name,
    //   Location,
    //   Price,
    //   Date_bid,
    //   Saved: false
    // }
    // const dataCar = {
    //   Id_car,
    //   Vehicle_type,
    //   Make,
    //   Model,
    //   Year,
    //   kilometres,
    //   PVP,
    //   Damage,
    //   Color,
    //   Engine,
    //   Transmition,
    //   Fuel,
    //   Drive,
    //   Id_car_imgs,
    //   f_idBids_Cars,
    //   f_idCars_bids
    // }
    // const dataImg_car = {
    //   id,
    //   Id_img_car,
    //   Id_img,
    //   Images,
    //   f_idCars_Imgs,
    //   f_idImgs_cars
    // }

    const bodyBids = new URLSearchParams();
    bodyBids.append('Id_bid', id_bid)
    // const bodyCars = new URLSearchParams();
    // const bodyImgCars = new URLSearchParams();

    console.log(formData)

    return this.httpClient.post(this.endpointBids, bodyBids, {headers})

  }
}
