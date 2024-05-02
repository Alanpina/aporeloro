import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactFormComponent } from './contact-form.component';
import { ContactFormRoutingModule } from './contact-form-routing.module';

@NgModule({
  imports: [CommonModule, ContactFormRoutingModule],
  declarations: [ContactFormComponent],
})
export class ContactFormModule {}
