import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserverService } from 'src/app/core/breakpoint-observer/breakpoint-observer.service';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainBannerComponent  {
  constructor(private breakPoint: BreakpointObserverService) {}
  smallText=
    'Somos un taller de serigrafia especializada en la creación de productos textiles para marcas y artistas';
  fullText =
    'Somos un taller de serigrafia especializada en la creación de productos textiles para marcas y artistas. Desde camisetas hata accesorios, nos dedicamos a plamar tus diseños con la más alta claidad y precisión en serigrafia. Además de la serigrafía textil, ofrecemos servicios de diseño de empaques y otras aplicaciones serigraficas para dar vida a tu marca.';


    p1 = 'Somos un taller de serigrafía especializado en la creación de productos textiles para marcas y artistas. Desde camisetas hasta accesorios, nos dedicamos a plasmar tus diseños con la más alta calidad y precisión en serigrafía. Además de la serigrafía textil, ofrecemos servicios de diseño de empaques y otras aplicaciones serigráficas para dar vida a tu marca.';
    p2 = 'Colaboramos estrechamente contigo para desarrollar tu merchandising de manera auténtica y de gran impacto. ¡Confía en nosotros para dar vida a tus ideas y resaltar en el mercado con productos únicos y de calidad!';
    get textToShow(){
       return this.breakPoint.isTabletOrDesktop ? this.fullText : this.smallText
    }

    get isMobileSize(){
      return this.breakPoint.isMobileSize
    }
  }
