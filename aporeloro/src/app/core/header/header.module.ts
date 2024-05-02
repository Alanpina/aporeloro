import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { TextLogoModule } from '../text-logo/text-logo.module';

@NgModule({
  imports: [CommonModule, TextLogoModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
