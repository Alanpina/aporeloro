import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from '../sections.interface';
import { SectionsService } from '../sections.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  activeItem : MenuItem = {} as MenuItem;
  menuItems : Array<MenuItem> = []
  menuOpened : boolean = false;

  constructor(private sections : SectionsService){

  }
  ngOnInit(): void {
    this.menuItems = this.sections.menuItems;
    this.sections.onActiveSectionChanged.subscribe((menuitem)=>{
      this.setActive(menuitem)
    })
  }

  setActive(item: MenuItem) {
    this.activeItem = item;
  }


  onHamburgerClick(){
    this.menuOpened = !this.menuOpened;
  }
}
