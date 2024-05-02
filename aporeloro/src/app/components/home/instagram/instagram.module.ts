import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InstagramComponent } from './instagram.component';
import { BeholdWidgetComponent } from '@behold/angular';

@NgModule({
  imports: [CommonModule, BeholdWidgetComponent],
  declarations: [InstagramComponent],
  exports: [InstagramComponent],
})
export class InstagramModule {}
