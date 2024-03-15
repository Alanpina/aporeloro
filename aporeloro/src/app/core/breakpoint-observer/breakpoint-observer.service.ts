import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({providedIn:'root'})
export class BreakpointObserverService {
  currentSizeSignal: WritableSignal<string> = signal('lg');

  constructor(private breakpointObserver: BreakpointObserver) {
    // detect screen size changes
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.setCurrentSizeAsMedium();
        }
      });
  }

  setCurrentSizeAsMedium() {
    this.currentSizeSignal.set('md');
  }

  get currentSize(){
    return this.currentSizeSignal.asReadonly()
  }

  get isMediumSize(){
    return this.currentSizeSignal() === 'md';
  }
}
