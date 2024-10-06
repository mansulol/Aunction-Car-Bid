import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  types_cars: any = [
    {
      titleCard: "minivan",
      count: 246,
      img: "/assets/imgs/vehicle_types/minivan.webp"
    },
    {
      titleCard: "pickup",
      count: 824,
      img: "/assets/imgs/vehicle_types/pickup.webp"
    },
    {
      titleCard: "roadster",
      count: 245,
      img: "/assets/imgs/vehicle_types/roadster.webp"
    },
    {
      titleCard: "sedan",
      count: 722,
      img: "/assets/imgs/vehicle_types/sedan.webp"
    },
    {
      titleCard: "SUV",
      count: 2545,
      img: "/assets/imgs/vehicle_types/SUV.webp"
    },
  ]

  makes_cards: any = [
    {
      titleCard: "CHEVROLET",
      count: 42564,
      img: "/assets/imgs/makes/chevrolet.svg"
    },
    {
      titleCard: "AUDI",
      count: 8654,
      img: "/assets/imgs/makes/audi.svg"
    },
    {
      titleCard: "BMW",
      count: 432,
      img: "/assets/imgs/makes/bmw.svg"
    },
    {
      titleCard: "FORD",
      count: 795,
      img: "/assets/imgs/makes/ford.svg"
    },
    {
      titleCard: "HONDA",
      count: 1646,
      img: "/assets/imgs/makes/honda.svg"
    },
    {
      titleCard: "MERCEDES",
      count: 2445,
      img: "/assets/imgs/makes/mercedes.svg"
    },
    {
      titleCard: "NISSAN",
      count: 657,
      img: "/assets/imgs/makes/nissan.svg"
    },
    {
      titleCard: "TOYOTA",
      count: 154,
      img: "/assets/imgs/makes/toyota.svg"
    },
  ]

  constructor() {  }

}
