import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent {
  @Input() imageName: string = '';
  @Input() price: number = 0;
  @Input() originalPrice?: number;
  @Input() text: string = '';
  @Input() category: string = '';
  @Input() colors: string[] = [];
  @Input() isNew: boolean = false;

  selectedColor: string = '';
  isInWishlist: boolean = false;

  toggleWishlist() {
    this.isInWishlist = !this.isInWishlist;
  }
}
