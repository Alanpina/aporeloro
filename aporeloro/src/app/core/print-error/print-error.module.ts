import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrintErrorComponent } from './print-error.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PrintErrorComponent],
  exports: [PrintErrorComponent],
})
export class PrintErrorModule {}
