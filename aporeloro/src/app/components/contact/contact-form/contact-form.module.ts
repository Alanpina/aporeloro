import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactFormComponent } from './contact-form.component';
import { ContactFormRoutingModule } from './contact-form-routing.module';
import { RecaptchaModule, RecaptchaV3Module } from 'ng-recaptcha';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ContactFormRoutingModule, RecaptchaModule, ReactiveFormsModule],
  declarations: [ContactFormComponent],
})
export class ContactFormModule {}
