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
      colors: ['#FFFFFF'],
      isNew: true
    },
    {
      imageName: 'collab1.png',
      price: 280,
      text: 'IntoTheMind',
      category: 'Playeras',
      colors: ['#000000'],
      isNew: true
    },
    {
      imageName: 'collab2.png',
      price: 450,
      originalPrice: 500,
      text: 'PezGallo',
      category: 'Playeras',
      colors: ['#FFFFFF', '#000000']
    },
    {
      imageName: 'preventa1.png',
      price: 300,
      text: 'APorElOro',
      category: 'Camisetas',
      colors: ['#5f6857']
    },
    {
      imageName: 'product-1B.png',
      price: 320,
      text: 'SuperLatino',
      category: 'Playeras',
      colors: ['#000000', '#2F4F4F'],
      isNew: true
    },
    {
      imageName: 'stickers1.png',
      price: 120,
      originalPrice: 150,
      text: 'StickerPack',
      category: 'stickers',
      colors: ['#000000', '#FFFFFF']
    }
  ];


  constructor() {}

  ngOnInit() {}
}
