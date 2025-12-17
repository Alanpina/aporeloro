import { EventEmitter, Injectable } from '@angular/core';
import { MenuItem } from './sections.interface';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  menuItems: Array<MenuItem> = [
    { label: 'INICIO', link: '/' },
    { label: 'MEDIA', link: '/media' },
    { label: 'TIENDA', link: '/shop' },
  ];
  private activeSectionChanged: EventEmitter<MenuItem> = new EventEmitter()

  get initialActiveItem(){
    return this.menuItems[0];
  }

  get onActiveSectionChanged(){
    return this.activeSectionChanged.asObservable();
  }
 setActive(sectionName: string){
  let activeItem = this.menuItems.find((item)=>item.label === sectionName);
  if(activeItem){
    this.activeSectionChanged.next(activeItem);
  }
 }

}
