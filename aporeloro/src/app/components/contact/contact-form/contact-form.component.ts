import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  constructor() {}
  buttonText: string = 'Enviar';
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.min(3),
      Validators.max(200),
    ]),
    email: new FormControl('', [Validators.email, Validators.max(50)]),
    message: new FormControl('', [Validators.required, Validators.max(400)]),
    resolvedCaptcha: new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
    console.log()
  }

  get buttonDisabled(){
    return this.contactForm.invalid
  }


  resolved(resolvedEvent: any) {
    this.contactForm.get('resolvedCaptcha')?.setValue(resolvedEvent)
  }
}
