import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteDataServiceService {

  endPointImage = "http://localhost:8080/api/car_aunction/imgs_cars";
  endPointCarAndImage = "http://localhost:8080/api/car_aunction/cars/image";
  endPointBids = "http://localhost:8080/api/car_aunction/bids";

  constructor(private httpClient: HttpClient) { }

  async delete(imageId: string, carId: string, bidId: string): Promise<boolean> {
    try {
      await this.deleteData({ imageId, carId, bidId });
      return true;
    } catch (error) {
      console.log('Error in delete data: ', error);
      return false;
    }
  }

  async deleteData(data: { imageId: string; carId: string; bidId: string }) {

    await Promise.all([
      this.httpClient.delete(`${this.endPointCarAndImage}/${data.carId}/${data.bidId}`).toPromise(),
      this.httpClient.delete(`${this.endPointBids}/${data.bidId}`).toPromise()
    ]);
  }
}
