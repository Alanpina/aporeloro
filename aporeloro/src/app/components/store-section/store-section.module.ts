import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreSectionComponent } from './store-section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StoreSectionComponent],
  exports: [StoreSectionComponent],
})
export class StoreSectionModule {}
