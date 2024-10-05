import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PutDataServiceService {

  @Input() formData: any = []

  endpointBids: string = "http://localhost:8080/api/car_aunction/bids"
  endPointCars: string = "http://localhost:8080/api/car_aunction/cars"
  endPointImgs: string = "http://localhost:8080/api/car_aunction/imgs_cars"

  constructor(private httpClient: HttpClient) {}

  async create( formData: any ): Promise<boolean> {
    const headers = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
    });

    const idHash = formData.Location+formData.Date_bid+formData.Year+formData.Make+formData.Model
    const idAll = await this.hash(idHash)

    const ids = {
      id_car: 'C'+idAll,
      id_img_car: "IMG"+idAll,
      id_bid: "S"+idAll,
    }

    console.log("Ids", ids)

    try {
      await this.postCars(formData, ids, headers)
      return true
    } catch (error) {
      console.log('Error in put service: ', error)
      return false
    }
  }

  async postCars(formData: any, ids: any, headers: HttpHeaders){

    await this.postCar(formData, ids, headers)

    await this.postImg(formData, ids, headers)

    await this.postBid(formData, ids, headers)
  }

  postCar(data: any, ids: any, headers: HttpHeaders){
    const bodyCars = new URLSearchParams();
    bodyCars.append('Id_car', ids.id_car)
    bodyCars.append('Vehicle_type', data.Vehicle_type)
    bodyCars.append('Make', data.Make);
    bodyCars.append('Model', data.Model);
    bodyCars.append('Year', data.Year.substring(0, 4).toString());
    bodyCars.append('kilometres', data.Kilometres.toString()+'00,000 Km');
    bodyCars.append('PVP', data.PVP.toString());
    bodyCars.append('Damage', data.Damage);
    bodyCars.append('Color', data.Color);
    bodyCars.append('Engine', data.Engine);
    bodyCars.append('Transmition', data.Transmission);
    bodyCars.append('Fuel', data.Fuel);
    bodyCars.append('Drive', data.Drive);
    bodyCars.append('Id_car_imgs', ids.id_img_car);

    console.log("Car in db")
    return this.httpClient.post(this.endPointCars, bodyCars.toString(), {headers}).toPromise()
  }

  postImg(data: any, ids: any, headers: HttpHeaders){
    const bodyImgs = new URLSearchParams();
    bodyImgs.append('Id_img_car', ids.id_img_car)
    bodyImgs.append('Images', data.Image.toString())
    // bodyImgs.append('Images', data.Image[1].toString())

    console.log("Img in db")
    return this.httpClient.post(this.endPointImgs, bodyImgs.toString(), {headers}).toPromise()
  }

  postBid(data: any, ids: any, headers: HttpHeaders){
    const bodyBids = new URLSearchParams();
    bodyBids.append('Id_bid', ids.id_bid);
    bodyBids.append('Id_car', ids.id_car);
    bodyBids.append('Name', data.Make+' '+data.Model+' '+data.Engine+' '+data.Year+' '+data.Color);
    bodyBids.append('Location', data.Location);
    bodyBids.append('Price', data.Price.toString());
    bodyBids.append('Date_bid', data.Date_bid.substring(0, data.Date_bid.indexOf('T')));
    bodyBids.append('Saved', "0");
    bodyBids.append('Uploaded', "1");

    console.log("Bid in db")
    return this.httpClient.post(this.endpointBids, bodyBids.toString(), {headers}).toPromise()
  }

  hash(data: string): Promise<string>{
    const buffer = new TextEncoder().encode(data);

    return crypto.subtle.digest('SHA-256', buffer).then(hashBuffer => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));

      const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

      return hashHex.slice(0, 4);
  });

  }
}
