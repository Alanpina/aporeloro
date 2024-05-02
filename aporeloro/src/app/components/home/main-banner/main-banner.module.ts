import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainBannerComponent } from './main-banner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MainBannerComponent],
  exports: [MainBannerComponent],
})
export class MainBannerModule {}
