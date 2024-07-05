import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ContactBannerEmailModule } from '../contact-banner-email/contact-banner-email.module';
import { InstagramModule } from '../home/instagram/instagram.module';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopContentModule } from './shop-content/shop-content.module';

@NgModule({
  imports: [
    CommonModule,
    InstagramModule,
    ContactBannerEmailModule,
    ShopRoutingModule,
    ShopContentModule
  ],
  declarations: [ShopComponent],
  exports: [ShopComponent],
})
export class ShopModule {}
