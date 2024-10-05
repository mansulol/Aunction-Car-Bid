import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PutDataServiceService } from '../services/putDataService/put-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bid',
  templateUrl: './add-bid.page.html',
  styleUrls: ['./add-bid.page.scss'],
})
export class AddBidPage implements OnInit {
  vehicle_types: any = ['Sedan', 'HatchBack', 'Coupe'];
  transmitions: any = ['Manual', 'Automatic', 'CVT'];
  fuels: any = ['Gasoline', 'Diesel', 'Electric'];
  drives: any = [
    'All Wheel drive (AWD)',
    'Front Wheel Drive (FWD)',
    'Rear wheel Drive (RWD)',
  ];

  bidForm: FormGroup

  constructor(
    private putService: PutDataServiceService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.bidForm = formBuilder.group({
      Location: ['', Validators.compose([Validators.required])],
      Date_bid: ['', Validators.compose([Validators.required])],
      PVP: ['', Validators.compose([Validators.required])],
      Damage: ['', Validators.compose([Validators.required])],
      Price: ['', Validators.compose([Validators.required])],
      Make: ['', Validators.compose([Validators.required])],
      Model: ['', Validators.compose([Validators.required])],
      Vehicle_type: ['', Validators.compose([Validators.required])],
      Year: ['', Validators.compose([Validators.required])],
      Color: ['', Validators.compose([Validators.required])],
      Engine: ['', Validators.compose([Validators.required])],
      Transmission: ['', Validators.compose([Validators.required])],
      Fuel: ['', Validators.compose([Validators.required])],
      Drive: ['', Validators.compose([Validators.required])],
      Kilometres: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    ('');
  }

  createBid(){
    if( !this.bidForm.valid ){
      console.log("Form invalid")
      return
    }else{
      console.log(this.bidForm.value)

      // const location = this.bidForm.value.Location;
      // const dateBid = this.bidForm.value.Date_bid;
      // const pvp = this.bidForm.value.PVP;
      // const damage = this.bidForm.value.Damage;
      // const price = this.bidForm.value.Price;
      // const make = this.bidForm.value.Make;
      // const model = this.bidForm.value.Model;
      // const vehicleType = this.bidForm.value.Vehicle_type;
      // const year = this.bidForm.value.Year;
      // const color = this.bidForm.value.Color;
      // const engine = this.bidForm.value.Engine;
      // const transmission = this.bidForm.value.Transmission;
      // const fuel = this.bidForm.value.Fuel;
      // const drive = this.bidForm.value.Drive;
      // const kilometres = this.bidForm.value.Kilometres;


      this.putService.create(this.bidForm.value).subscribe((res) => {
        console.log("New bid created")
        this.route.navigateByUrl("/my-bids")
      })
    }
  }

  getFormControl(field: string){
    return this.bidForm.get(field)
  }
}
