import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainBannerComponent } from './main-banner.component';
import { ImageLogoModule } from 'src/app/core/image-logo/image-logo.module';

@NgModule({
  imports: [CommonModule, ImageLogoModule],
  declarations: [MainBannerComponent],
  exports: [MainBannerComponent],
})
export class MainBannerModule {}
