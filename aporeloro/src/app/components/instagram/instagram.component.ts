import { Component, OnInit } from '@angular/core';
import { BreakpointObserverService } from 'src/app/core/breakpoint-observer/breakpoint-observer.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss'],
})
export class InstagramComponent implements OnInit {
  mediumFeedToken = 'HesgDnZAPgduIUl3HUW0';
  largeFeedToken = '6ve5IkJUFkWwu0r7gio8';

  tokenToShow: string =''
  constructor(private breakPointObserver : BreakpointObserverService) {}

  ngOnInit(): void {
    this.tokenToShow = this.breakPointObserver.isMediumSize ?   this.mediumFeedToken : this.largeFeedToken
  }
}
