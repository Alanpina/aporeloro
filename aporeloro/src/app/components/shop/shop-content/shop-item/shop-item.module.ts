import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopItemComponent } from './shop-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShopItemComponent],
  exports: [ShopItemComponent]
})
export class ShopItemModule { }
