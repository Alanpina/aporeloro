import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { ImageLogoModule } from '../image-logo/image-logo.module';
import { RouterModule } from '@angular/router';
import { TextLogoModule } from "../text-logo/text-logo.module";

@NgModule({
  imports: [CommonModule, ImageLogoModule, RouterModule, TextLogoModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
