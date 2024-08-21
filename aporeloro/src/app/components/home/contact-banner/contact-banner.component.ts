import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-banner',
  templateUrl: './contact-banner.component.html',
  styleUrl: './contact-banner.component.scss',
})
export class ContactBannerComponent {
  constructor(private httpClient: HttpClient) {}

  contactForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.max(50)]),
  });
  titleLine1 = 'Cotiza tu';
  titleLine2 = 'producción';
  text =
    'Deja tu correo y te enviaremos información para cotizar. ¡Estamos Ansiosos de ayudarte a lograr tus objetivos!';
  textButton = 'A POR EL ORO';

  get buttonDisabled() {
    return this.contactForm.invalid;
  }

  sendEmail() {
    Swal.fire({
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading(null);
      },
    });
    //this.httpClient.post('https://aporeloro.com/laravel/public/api/contact-form', this.contactForm.value).pipe(take(1)).subscribe((data)=>{
    this.httpClient
      .post('http://localhost:8000/api/contact-form', this.contactForm.value)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          Swal.hideLoading();
          let dataResponse = data as any;
          if (dataResponse['message'] === 'ok') {
            Swal.fire({
              title: 'El correo de contacto ha sido enviado correctamente',
              icon: 'success',
              showConfirmButton: false,
              timer: 3500,
            });
          } else {
            Swal.fire({
              title: 'Hubo un error al ponerte en contacto',
              icon: 'error',
              showConfirmButton: false,
              timer: 3500,
            });
          }
        },
        error: () => {
          Swal.fire({
            title: 'Hubo un error al ponerte en contacto',
            icon: 'error',
            showConfirmButton: false,
            timer: 3500,
          });
        },
      });
  }

  resolved(resolvedEvent: any) {
    this.contactForm.get('resolvedCaptcha')?.setValue(resolvedEvent);
  }
}
