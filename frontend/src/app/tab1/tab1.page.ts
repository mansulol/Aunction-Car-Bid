import { Component, Input, OnInit } from '@angular/core';
import { ConstrainsServiceService } from '../services/ConstrainsService/constrains-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  makes_cards: any = []
  types_cards: any = []

  constructor(private constrains: ConstrainsServiceService) {  }
  ngOnInit() {
    this.makes_cards = this.constrains.makes_cards
    this.types_cards = this.constrains.types_cars
  }

}
