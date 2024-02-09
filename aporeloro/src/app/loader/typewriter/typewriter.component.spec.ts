import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TypeWriterComponent } from './typewriter.component';

describe('TypeWriterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TypeWriterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TypeWriterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'aporeloro'`, () => {
    const fixture = TestBed.createComponent(TypeWriterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('aporeloro');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TypeWriterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('aporeloro app is running!');
  });
});
