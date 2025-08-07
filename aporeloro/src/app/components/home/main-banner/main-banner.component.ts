import { Component, HostListener, AfterViewInit } from '@angular/core';
import { BreakpointObserverService } from 'src/app/core/breakpoint-observer/breakpoint-observer.service';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent implements AfterViewInit {
  bannerTexts = {
    desktop: {
      line1: "Estudio de serigrafía",
      line2: "Enfocado en desarrollo de merch"
    },
    mobile: {
      line: "Estudio de serigrafía enfocado en desarrollo de merch"
    }
  };

  constructor(private breakPoint: BreakpointObserverService) {}

  get isMobileSize() {
    return this.breakPoint.isMobileSize;
  }

  ngAfterViewInit() {
    this.adjustImagePosition();
  }

  @HostListener('window:resize')
  onResize() {
    this.adjustImagePosition();
  }

  private adjustImagePosition() {
    const img = document.querySelector('.main-banner .image-container img') as HTMLElement;
    if (!img) return;

    // Ajusta dinámicamente la posición vertical basada en el tamaño de la pantalla
    const offset = window.innerHeight * 0.08; // 8% de la altura de la pantalla
    img.style.objectPosition = `center ${Math.min(offset, 70)}px`;
  }
}
