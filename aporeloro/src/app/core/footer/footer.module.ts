import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';
import { TextLogoModule } from '../text-logo/text-logo.module';

@NgModule({
  imports: [CommonModule, TextLogoModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
