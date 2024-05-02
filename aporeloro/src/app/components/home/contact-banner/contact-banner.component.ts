import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-banner',
  templateUrl: './contact-banner.component.html',
  styleUrl: './contact-banner.component.scss'
})
export class ContactBannerComponent {

  titleLine1= 'Cotiza tu'
  titleLine2= 'producción'
  text = 'Deja tu correo y te enviaremos información para cotizar. ¡Estamos Ansiosos de ayudarte a lograr tus objetivos!'
  textButton = 'A POR EL ORO'
}
