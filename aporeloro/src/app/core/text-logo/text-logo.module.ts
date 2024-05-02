import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TextLogoComponent } from './text-logo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TextLogoComponent],
  exports: [TextLogoComponent],
})
export class TextLogoModule {}
