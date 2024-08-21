import { Component } from '@angular/core';
import { SectionValues } from 'src/app/core/sections.interface';
import { SectionsService } from 'src/app/core/sections.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private sections : SectionsService) { }

  ngOnInit() {
    this.sections.setActive(SectionValues.INICIO);
  }
}
