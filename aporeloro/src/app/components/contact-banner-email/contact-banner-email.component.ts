import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-banner-email',
  templateUrl: './contact-banner-email.component.html',
  styleUrl: './contact-banner-email.component.scss'
})
export class ContactBannerEmailComponent {

  titleLine1= 'Déjame tu correo'
  titleLine2= ''
  text = ''
  textButton = 'Enviar'
  img = 'assets/images/CorreoCta.jpg'

}
