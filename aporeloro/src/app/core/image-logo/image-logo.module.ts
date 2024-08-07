import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLogoComponent } from './image-logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageLogoComponent],
  exports: [ImageLogoComponent]
})
export class ImageLogoModule { }
