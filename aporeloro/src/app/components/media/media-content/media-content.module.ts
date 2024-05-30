import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaContentComponent } from './media-content.component';
import { BeholdWidgetComponent } from '@behold/angular';

@NgModule({
  imports: [CommonModule, BeholdWidgetComponent],
  declarations: [MediaContentComponent],
  exports: [MediaContentComponent],
})
export class MediaContentModule {}
