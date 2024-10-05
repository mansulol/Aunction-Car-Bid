import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  types_cars: any = [
    {
      titleCard: "Hatchback",
      count: 1554,
      img: "/assets/user.svg"
    },
    {
      titleCard: "Pickup",
      count: 1343,
      img: "/assets/user.svg"
    },
    {
      titleCard: "Sedan",
      count: 252842,
      img: "/assets/user.svg"
    },
    {
      titleCard: "Fastback",
      count: 9466,
      img: "/assets/user.svg"
    }
  ]

  makes_cards: any = [
    {
      titleCard: "Chevrolet",
      count: 11982,
      img: "/assets/user.svg"
    },
    {
      titleCard: "Ford",
      count: 75323,
      img: "/assets/user.svg"
    },
    {
      titleCard: "Peugeot",
      count: 85324,
      img: "/assets/user.svg"
    },
    {
      titleCard: "Civic",
      count: 86464,
      img: "/assets/user.svg"
    },
    {
      titleCard: "Kia",
      count: 132455,
      img: "/assets/user.svg"
    },
  ]

  constructor() {  }

}
