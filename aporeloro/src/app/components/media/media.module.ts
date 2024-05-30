import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { InstagramModule } from '../home/instagram/instagram.module';
import { MediaContentModule } from './media-content/media-content.module';
import { MediaRoutingModule } from './media-routing.module';
import { ContactBannerEmailModule } from '../contact-banner-email/contact-banner-email.module';

@NgModule({
  imports: [
    CommonModule,
    MediaRoutingModule,
    InstagramModule,
    ContactBannerEmailModule,
    MediaContentModule
  ],
  declarations: [MediaComponent]
})
export class MediaModule { }
