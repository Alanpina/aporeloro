import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopContentComponent } from './shop-content.component';
import { ShopItemModule } from './shop-item/shop-item.module';

@NgModule({
  imports: [CommonModule, ShopItemModule],
  declarations: [ShopContentComponent],
  exports: [ShopContentComponent],
})
export class ShopContentModule {}
