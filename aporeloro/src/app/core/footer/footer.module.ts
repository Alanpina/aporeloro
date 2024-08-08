import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';
import { ImageLogoModule } from '../image-logo/image-logo.module';

@NgModule({
  imports: [CommonModule, ImageLogoModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
