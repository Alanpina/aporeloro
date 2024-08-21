import { Component, OnInit } from '@angular/core';
import { SectionValues } from 'src/app/core/sections.interface';
import { SectionsService } from 'src/app/core/sections.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private sections : SectionsService) { }

  ngOnInit() {
    this.sections.setActive(SectionValues.TIENDA);
  }

}
