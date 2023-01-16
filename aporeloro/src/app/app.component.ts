import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('textElement') textElement!: ElementRef;
  @ViewChild('blinkElement') blinkElement!: ElementRef;

  @Input() wordArray: string[] = [
    'Oro...',
    'Queso...',
    'Loro...',
  ];
  @Input() typingSpeedMilliseconds = 300;
  @Input() deleteSpeedMilliseconds = 300;

  private actualWordIndex = 0;

  title = 'a por el oro';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.typingEffect();
  }

  private typingEffect(): void {
    const word = this.wordArray[this.actualWordIndex].split('');
    this.loopTyping(word);
  }

  loopTyping(word: Array<string>) {
    if (word.length > 0) {
      this.textElement.nativeElement.innerHTML += word.shift();
      setTimeout(() => {
        this.loopTyping(word);
      }, this.typingSpeedMilliseconds);
    } else {
      this.deletingEffect();
    }
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.actualWordIndex].split('');

    this.loopDeleting(word);
  }

  loopDeleting(word: Array<string>) {
    if (word.length) {
      word.pop();
      this.textElement.nativeElement.innerHTML = word.join('');
      setTimeout(() => {
        this.loopDeleting(word);
      }, this.typingSpeedMilliseconds);
    }
    else {
      let any = this.wordArray.length > this.actualWordIndex + 1;
      this.actualWordIndex =
        this.wordArray.length > this.actualWordIndex + 1
          ? this.actualWordIndex + 1
          : 0;

      this.typingEffect();
    }
  }
}
