import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainBannerModule } from './main-banner/main-banner.module';
import { StoreSectionModule } from './store-section/store-section.module';
import { InstagramModule } from './instagram/instagram.module';
import { ContactBannerModule } from './contact-banner/contact-banner.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MainBannerModule,
    StoreSectionModule,
    InstagramModule,
    ContactBannerModule,
  ],
  declarations: [HomeComponent],
  exports: [],
})
export class HomeModule {}
