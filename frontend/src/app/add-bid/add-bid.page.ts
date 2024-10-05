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
      Kilometres: ['', Validators.compose([Validators.required])],
      Image: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    ('');
  }

  async createBid(){
    if( !this.bidForm.valid ){
      console.log("Form invalid")
      return
    }else{
      console.log(this.bidForm.value)

      const bidCreated = await this.putService.create(this.bidForm.value)

      if( bidCreated ){
        console.log("New bid created")
        this.route.navigateByUrl("/tab-mybids")
      }else{
        console.log("Failed to create a new bid")
      }

    }
  }

  getFormControl(field: string){
    return this.bidForm.get(field)
  }
}
