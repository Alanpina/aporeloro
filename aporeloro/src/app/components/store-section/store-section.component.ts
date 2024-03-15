import { Component } from '@angular/core';

@Component({
  selector: 'app-store-section',
  templateUrl: './store-section.component.html',
  styleUrls: ['./store-section.component.scss']
})
export class StoreSectionComponent {
  title : string = 'Nuestra Merch'
  text: string = 'Descubre La mejor selección de productos en nuestra tienda en linea. Haz click ahora para una experiencia rápida y segura. ¡Te esperamos!'
  textButton: string = 'Entrar'
}
