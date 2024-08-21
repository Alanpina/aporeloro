import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  menuItems = [
    { label: 'INICIO', link: '/' },
    { label: 'MEDIA', link: '/media' },
    { label: 'TIENDA', link: '/shop' },
    { label: 'CONTACTO', link: '/contact' }
  ];

  activeItem = this.menuItems[0];  // Inicialmente, el primer elemento es el activo.
  menuOpened : boolean = false;

  setActive(item: any) {
    this.activeItem = item;
  }


  onHamburgerClick(){
    this.menuOpened = !this.menuOpened;
  }
}
