/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediaContentComponent } from './media-content.component';

describe('MediaContentComponent', () => {
  let component: MediaContentComponent;
  let fixture: ComponentFixture<MediaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
