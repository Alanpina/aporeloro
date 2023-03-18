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
//Landing page de a por el oro, esta pagina se muestra al entrar en la web
//Se muestra un titulo y un texto que se va escribiendo y borrando
//El texto se va escribiendo y borrando de forma automatica con un intervalo de tiempo y se va cambiando de palabra
export class AppComponent implements OnInit , AfterViewInit {
  @ViewChild('typewriter', {static: true}) typewriter!: ElementRef;

  phrase = 'A POR EL ORO'; // La frase que se animará
  words = ['QUESO', 'LORO', 'ORO']; // Las palabras que se utilizarán para la animación
  currentIndex = 0; // El índice de la palabra actual
  currentWord = ''; // La palabra actual
  showCursor = true; // Para mostrar/ocultar el cursor en la animación


  constructor() { }

  ngOnInit(): void {
    this.startAnimation(this.phrase);
  }

  ngAfterViewInit(): void {
  }


  startAnimation(phrase: string) {
    setTimeout(() => {
      // Primera parte de la animación: escribir la frase completa
      const typeWriterElement = this.typewriter.nativeElement;
      typeWriterElement.innerHTML = phrase;

      // Segunda parte de la animación: borrar la palabra "oro" y escribir una nueva palabra
      setTimeout(() => {
        const newWord = this.words[this.currentIndex];
        let limit = 3;
        if(this.currentIndex > 0) {
          limit = this.words[this.currentIndex - 1].length;
        }
        this.currentIndex = this.currentIndex + 1
        // Si la palabra es "queso" borrar 4 letras en lugar de 3, para que coincida con el tamaño de la palabra "oro" y no se vea raro el borrado y escritura de la palabra
        for (let i = 0; i < limit; i++) { // Borrar la palabra "oro" letra por letra
          setTimeout(() => {
            typeWriterElement.innerHTML = typeWriterElement.innerHTML.slice(0, -1);
          }, i * 100);
        }

        for (let i = 0; i < newWord.length; i++) { // Escribir la nueva palabra letra por letra
          setTimeout(() => {
            typeWriterElement.innerHTML += newWord.charAt(i);
          }, (i + limit) * 100);
        }

        // Repetir la animación con la siguiente palabra
        setTimeout(() => {
          if(this.currentIndex === this.words.length) {
            this.currentIndex = 0;
            this.startAnimation(this.phrase);
          return;
        }

          this.startAnimation(typeWriterElement.innerHTML);
        }, 3000);
      }, 2000);
    }, 1000);
  }
}
