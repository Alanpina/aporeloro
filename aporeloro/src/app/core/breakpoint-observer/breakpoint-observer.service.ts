import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({providedIn:'root'})
export class BreakpointObserverService {
  currentSizeSignal: WritableSignal<string> = signal('lg');

  constructor(private breakpointObserver: BreakpointObserver) {
    // detect screen size changes



    this.breakpointObserver
      .observe(['(max-width: 575.98px)', '(max-width: 767.98px)', '(max-width: 991.98px)', '(max-width: 1199.98px)', '(max-width: 1399.98px)'])
      .subscribe((result: BreakpointState) => {
        if(result.breakpoints['(max-width: 575.98px)']){
          this.setCurrentSizeAsExtraSmall()
          return;
        }
        if(result.breakpoints['(max-width: 767.98px)']){
          this.setCurrentSizeAsSmall()
          return;
        }
        if(result.breakpoints['(max-width: 991.98px)']){
          this.setCurrentSizeAsMedium()
          return;
        }
        if(result.breakpoints['(max-width: 1199.98px)']){
          this.setCurrentSizeAsLarge()
          return;
        }
        if(result.breakpoints['(max-width: 1399.98px)']){
          this.setCurrentSizeAsExtraLarge()
          return;
        }
        this.setCurrentSizeAsExtraExtraLarge();

      });
  }

  setCurrentSizeAsExtraSmall() {
    this.currentSizeSignal.set('xs');
  }

  setCurrentSizeAsSmall() {
    this.currentSizeSignal.set('sm');
  }

  setCurrentSizeAsMedium() {
    this.currentSizeSignal.set('md');
  }

  setCurrentSizeAsLarge() {
    this.currentSizeSignal.set('lg');
  }

  setCurrentSizeAsExtraLarge() {
    this.currentSizeSignal.set('xl');
  }

  setCurrentSizeAsExtraExtraLarge() {
    this.currentSizeSignal.set('xxl');
  }

  get currentSize(){
    return this.currentSizeSignal.asReadonly()
  }

  get isDesktopSize(){
    return this.currentSizeSignal() === 'lg' || this.currentSizeSignal() === 'xl'|| this.currentSizeSignal() === 'xxl';
  }

  get isTabletSize(){
    return this.currentSizeSignal() === 'md';
  }

  get isTabletOrDesktop(){
    return this.isTabletSize || this.isDesktopSize
  }
}
