import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreSectionComponent } from './store-section.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [StoreSectionComponent],
  exports: [StoreSectionComponent],
})
export class StoreSectionModule {}
