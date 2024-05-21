import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  buttonText: string = 'Enviar';
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.min(3),
      Validators.max(200),
    ]),
    email: new FormControl('', [Validators.email, Validators.max(50)]),
    message: new FormControl('', [Validators.required, Validators.max(400)]),
    resolvedCaptcha: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}

  get buttonDisabled() {
    return this.contactForm.invalid;
  }

  sendEmail() {
    Swal.fire({allowOutsideClick:false, didOpen: () => { Swal.showLoading(null);}})
    //this.httpClient.post('https://aporeloro.com/laravel/public/api/contact-form', this.contactForm.value).pipe(take(1)).subscribe((data)=>{
    this.httpClient
      .post('http://localhost:8000/api/contact-form', this.contactForm.value)
      .pipe(take(1))
      .subscribe((data) => {
        Swal.hideLoading();
        let dataResponse = data as any;
        if (dataResponse['message'] === 'ok') {
          Swal.fire({
            title: 'El correo de contacto ha sido enviado correctamente',
            icon: 'success',
            showConfirmButton: false,
            timer: 3500,
          });
        }
        else{
          Swal.fire({
            title: 'Hubo un error al ponerte en contacto',
            icon: 'error',
            showConfirmButton: false,
            timer: 3500,
          });
        }
      });
  }

  resolved(resolvedEvent: any) {
    this.contactForm.get('resolvedCaptcha')?.setValue(resolvedEvent);
  }
}
