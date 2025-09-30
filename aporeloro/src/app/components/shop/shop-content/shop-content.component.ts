import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.scss'],
})
export class ShopContentComponent implements OnInit {
 items = [
    {
      imageName: 'playeras1.png',
      price: 250,
      originalPrice: 350,
      text: 'MakeItRain',
      category: 'Playeras',
      isNew: true
    },
    {
      imageName: 'collab1.png',
      price: 280,
      text: 'IntoTheMind',
      category: 'Playeras',
      isNew: true
    },
    {
      imageName: 'collab2.png',
      price: 450,
      originalPrice: 500,
      text: 'PezGallo',
      category: 'Playeras',
    },
    {
      imageName: 'preventa1.png',
      price: 300,
      text: 'APorElOro',
      category: 'Camisetas',
    },
    {
      imageName: 'product-1B.png',
      price: 320,
      text: 'SuperLatino',
      category: 'Playeras',
      isNew: false
    },
    {
      imageName: 'stickers1.png',
      price: 120,
      originalPrice: 150,
      text: 'StickerPack',
      category: 'stickers',
    }
  ];


  constructor() {}

  ngOnInit() {}
}
