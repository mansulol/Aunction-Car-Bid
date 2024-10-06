import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstrainsServiceService {
  types_cars: any = [
    {
      titleCard: 'Minivan',
      count: 246,
      img: '/assets/imgs/vehicle_types/minivan.webp',
    },
    {
      titleCard: 'Pickup',
      count: 824,
      img: '/assets/imgs/vehicle_types/pickup.webp',
    },
    {
      titleCard: 'Roadster',
      count: 245,
      img: '/assets/imgs/vehicle_types/roadster.webp',
    },
    {
      titleCard: 'Sedan',
      count: 722,
      img: '/assets/imgs/vehicle_types/sedan.webp',
    },
    {
      titleCard: 'SUV',
      count: 2545,
      img: '/assets/imgs/vehicle_types/SUV.webp',
    },
  ];

  makes_cards: any = [
    {
      titleCard: 'CHEVROLET',
      count: 42564,
      img: '/assets/imgs/makes/chevrolet.svg',
    },
    {
      titleCard: 'AUDI',
      count: 8654,
      img: '/assets/imgs/makes/audi.svg',
    },
    {
      titleCard: 'BMW',
      count: 432,
      img: '/assets/imgs/makes/bmw.svg',
    },
    {
      titleCard: 'FORD',
      count: 795,
      img: '/assets/imgs/makes/ford.svg',
    },
    {
      titleCard: 'HONDA',
      count: 1646,
      img: '/assets/imgs/makes/honda.svg',
    },
    {
      titleCard: 'MERCEDES',
      count: 2445,
      img: '/assets/imgs/makes/mercedes.svg',
    },
    {
      titleCard: 'NISSAN',
      count: 657,
      img: '/assets/imgs/makes/nissan.svg',
    },
    {
      titleCard: 'TOYOTA',
      count: 154,
      img: '/assets/imgs/makes/toyota.svg',
    },
  ];

  transmissions: any = ['Manual',
    'Automatic',
    'CVT'
  ];

  fuels: any = [
    'Gasoline',
    'Diesel',
    'Electric'
  ];

  drives: any = [
    'All Wheel drive (AWD)',
    'Front Wheel Drive (FWD)',
    'Rear wheel Drive (RWD)',
  ];

  constructor() {}
}
