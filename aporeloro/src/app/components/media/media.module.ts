import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { ContactBannerModule } from '../home/contact-banner/contact-banner.module';
import { InstagramModule } from '../home/instagram/instagram.module';
import { MediaContentModule } from './media-content/media-content.module';
import { MediaRoutingModule } from './media-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MediaRoutingModule,
    InstagramModule,
    ContactBannerModule,
    MediaContentModule
  ],
  declarations: [MediaComponent]
})
export class MediaModule { }
