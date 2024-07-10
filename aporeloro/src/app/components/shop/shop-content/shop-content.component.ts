import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.scss'],
})
export class ShopContentComponent implements OnInit {
  items: Array<any> = [
    { imageName: 'a-por-el-oro', price: '$300.00', text: 'O clock' },
    { imageName: 'make-it-rain', price: '$300.00', text: 'Make It Rain' },
    { imageName: 'mundito', price: '$300.00', text: 'Classic' },
    { imageName: 'a-por-el-oro', price: '$300.00', text: 'O clock' },
    { imageName: 'make-it-rain', price: '$300.00', text: 'Make It Rain' },
    { imageName: 'mundito', price: '$300.00', text: 'Classic' },
  ];

  constructor() {}

  ngOnInit() {}
}
