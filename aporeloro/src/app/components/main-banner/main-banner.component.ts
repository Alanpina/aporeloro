import { Component, ViewEncapsulation } from '@angular/core';
import { BreakpointObserverService } from 'src/app/core/breakpoint-observer/breakpoint-observer.service';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainBannerComponent {
  constructor(private breakPoint: BreakpointObserverService) {}
  textMediumSize =
    'Somos un taller de serigrafia especializada en la creación de productos textiles para marcas y artistas';
  get isMediumSize() {
    return this.breakPoint.isMediumSize;
  }
  p1 =
    'Somos un taller de serigrafia especializada en la creación de productos textiles para marcas y artistas. Desde camisetas hata accesorios, nos dedicamos a plamar tus diseños con la más alta claidad y precisión en serigrafia. Además de la serigrafía textil, ofrecemos servicios de diseño de empaques y otras aplicaciones serigraficas para dar vida a tu marca.';
}
