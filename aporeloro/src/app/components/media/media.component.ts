import { Component, OnInit } from '@angular/core';
import { SectionValues } from 'src/app/core/sections.interface';
import { SectionsService } from 'src/app/core/sections.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor(private sections : SectionsService) { }

  ngOnInit() {
    this.sections.setActive(SectionValues.MEDIA);
  }

}
