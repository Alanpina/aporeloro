import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactBannerComponent } from './contact-banner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrintErrorModule } from 'src/app/core/print-error/print-error.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ContactBannerComponent],
  imports: [CommonModule, ReactiveFormsModule, PrintErrorModule, RecaptchaModule, HttpClientModule],
  exports: [ContactBannerComponent],
})
export class ContactBannerModule {}
