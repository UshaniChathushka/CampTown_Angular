import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camp-items',
  templateUrl: './camp-items.component.html',
  styleUrls: ['./camp-items.component.css']
})
export class CampItemsComponent implements OnInit {
  campItems = [
    { name: 'Camping Bag', image: 'bag1.jpg', description: 'A sturdy camping bag.', price: 25 },
    { name: 'Camping Bag', image: 'bag2.jpg', description: 'A large camping bag.', price: 30 },
    { name: 'Camping Bag', image: 'bag3.jpg', description: 'A compact camping bag.', price: 20 },
    { name: 'Camping Bag', image: 'bag4.jpg', description: 'A durable camping bag.', price: 28 },
    { name: 'Camping Bag', image: 'bag5.jpg', description: 'A lightweight camping bag.', price: 22 },
    { name: 'Camping Chair', image: 'chair1.jpg', description: 'A comfortable camping chair.', price: 15 },
    { name: 'Camping Chair', image: 'chair2.jpeg', description: 'A foldable camping chair.', price: 18 },
    { name: 'Camping Chair', image: 'chair3.jpeg', description: 'A portable camping chair.', price: 16 },
    { name: 'Camping Chair', image: 'chair4.jpeg', description: 'A reclining camping chair.', price: 20 },
    { name: 'Camping Gas', image: 'gas1.jpg', description: 'A compact gas stove.', price: 40 },
    { name: 'Camping Gas', image: 'gas2.jpg', description: 'A portable gas stove.', price: 45 },
    { name: 'Camping Lamp', image: 'lamp1.jpg', description: 'A bright camping lamp.', price: 10 },
    { name: 'Camping Lamp', image: 'lamp2.jpg', description: 'A solar-powered camping lamp.', price: 12 },
    { name: 'Camping Lamp', image: 'lamp3.jpg', description: 'A rechargeable camping lamp.', price: 15 },
    { name: 'Camping Mat', image: 'mat1.jpg', description: 'A comfortable camping mat.', price: 8 },
    { name: 'Camping Mat', image: 'mat2.jpeg', description: 'A waterproof camping mat.', price: 10 },
    { name: 'Camping Mat', image: 'mat3.jpg', description: 'A foldable camping mat.', price: 12 },
    { name: 'Raincoat', image: 'raincoat1.jpg', description: 'A waterproof raincoat.', price: 25 },
    { name: 'Raincoat', image: 'raincoat2.jpeg', description: 'A lightweight raincoat.', price: 20 },
    { name: 'Camping Tent', image: 'tent1.jpg', description: 'A 2-person camping tent.', price: 50 },
    { name: 'Camping Tent', image: 'tent2.jpg', description: 'A 4-person camping tent.', price: 70 },
    { name: 'Camping Tent', image: 'tent3.jpg', description: 'A 6-person camping tent.', price: 90 },
    { name: 'Camping Tent', image: 'tent4.jpg', description: 'A lightweight camping tent.', price: 60 },
    { name: 'Camping Tent', image: 'tent5.jpeg', description: 'A durable camping tent.', price: 80 }
  ];

  constructor() { }

  ngOnInit(): void { }
}
