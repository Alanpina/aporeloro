import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TypewriterComponent } from './typewriter.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TypewriterComponent],
  exports: [TypewriterComponent],
})
export class TypewriterModule {}
