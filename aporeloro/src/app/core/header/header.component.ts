import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { MenuItem } from '../sections.interface';
import { SectionsService } from '../sections.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  activeItem: MenuItem = {} as MenuItem;
  menuItems: Array<MenuItem> = [];
  menuOpened: boolean = false;

  constructor(private sections: SectionsService) {}

  ngOnInit(): void {
    this.menuItems = this.sections.menuItems;
    this.sections.onActiveSectionChanged.subscribe((menuitem) => {
      this.setActive(menuitem);
    });

    // Inicializa el estado del header
    this.checkScrollPosition();
  }

  setActive(item: MenuItem) {
    this.activeItem = item;
    if (window.innerWidth <= 768) {
      this.menuOpened = false;
    }
  }

  onHamburgerClick() {
    this.menuOpened = !this.menuOpened;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.checkScrollPosition();
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) {
      this.menuOpened = false;
    }
  }

  private checkScrollPosition() {
    const header = document.querySelector('.main-header');
    const banner = document.querySelector('.serigrafia-banner');

    if (!header || !banner) return;

    const bannerHeight = banner.clientHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > bannerHeight * 0.7) {
      header.classList.add('solid-header');
      header.classList.remove('transparent-header');
    } else {
      header.classList.add('transparent-header');
      header.classList.remove('solid-header');
    }
  }
}
