import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactFormComponent } from './contact-form.component';
import { ContactFormRoutingModule } from './contact-form-routing.module';
import { RecaptchaModule, RecaptchaV3Module } from 'ng-recaptcha';
import { ReactiveFormsModule } from '@angular/forms';
import { PrintErrorModule } from 'src/app/core/print-error/print-error.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ContactFormRoutingModule,
    RecaptchaModule,
    ReactiveFormsModule,
    PrintErrorModule,
    HttpClientModule
  ],
  declarations: [ContactFormComponent],
})
export class ContactFormModule {}
