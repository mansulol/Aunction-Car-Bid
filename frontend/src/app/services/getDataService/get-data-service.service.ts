import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetDataServiceService {
  endpointBids = 'http://localhost:8080/api/car_aunction/bids';
  endpointCars = 'http://localhost:8080/api/car_aunction/cars';
  endpointImgsCars = 'http://localhost:8080/api/car_aunction/imgs_cars';

  constructor(private httpClient: HttpClient) {}

  getImageByCar(id_car: string): any {
    const params = new HttpParams().set('Id_car', id_car);

    return this.httpClient.get(this.endpointCars + '/getByCar', { params });
  }

  // Get data of bids with http
  getBidsHttp() {
    return this.httpClient.get(this.endpointBids);
  }
  // Get data of cars with http
  getCarsHttp() {
    return this.httpClient.get(this.endpointCars);
  }
  // Get data of images with http
  getImagesHttp() {
    return this.httpClient.get(this.endpointImgsCars);
  }
}
