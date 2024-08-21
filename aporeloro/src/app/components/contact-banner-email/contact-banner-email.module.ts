import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactBannerEmailComponent } from './contact-banner-email.component';
import { ContactBannerModule } from '../home/contact-banner/contact-banner.module';

@NgModule({
  declarations: [ContactBannerEmailComponent],
  imports: [CommonModule, ContactBannerModule],
  exports: [ContactBannerEmailComponent],
})
export class ContactBannerEmailModule {}
