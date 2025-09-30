import { Component } from '@angular/core';

@Component({
  selector: 'app-store-section',
  templateUrl: './store-section.component.html',
  styleUrls: ['./store-section.component.scss']
})
export class StoreSectionComponent {
  titleLine1 : string = 'Nuestra'
  titleLine2 : string = 'Merch'
  text: string = 'Encuentra productos con estilo.'
  text2: string = 'Compra seguro y sin complicaciones.'
  textButton: string = 'Entrar'
}
