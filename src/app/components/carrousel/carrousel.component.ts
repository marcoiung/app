import { Component } from '@angular/core';
import { ISlide } from './model/carrousel';
import { SlideComponent } from './slide/slide.component';


@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [SlideComponent],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent {

  slider: ISlide[] = [
    {
      idx:0,
      src: '/assets/img/carrousel/img01.svg',
      h1: 'Seguro Residencial',
      h2: 'Mais barato do que você pensa. Mais completo do que você imagina',
      alt: 'imagem Caixa Residencial',
      btnText: 'Contrate Agora'

    },
    {
      idx:1,
      src: '/assets/img/carrousel/img02.svg',
      h1: 'Seguro Residencial',
      h2: 'Sua casa é lugar de paz e felicidade. Garanta que continue assim.',
      alt: 'imagem Caixa Residencial',
      btnText: 'Contrate Agora'
    },
    {
      idx:2,
      src: '/assets/img/carrousel/img03.svg',
      h1: 'Residencial Fácil',
      h2: 'A proteção para sua casa com pagamento único ou mensal e assistências exclusivas.',
      alt: 'imagem Caixa Residencial Fácil',
      btnText: 'Contrate Agora'
    }
  ];

  slide!:ISlide;

  currentIndex: number = 0;

  isActive: boolean = false;
  itemchanged:boolean =false;

  ngOnInit(){
    this.slide = this.slider[0];
  }

  next() {
    debugger;
    this.currentIndex = (this.currentIndex + 1) % this.slider.length;
    this.slide = this.slider[this.currentIndex];
  }
  prev() {
    debugger;
    this.currentIndex = (this.currentIndex - 1 + this.slider.length) % this.slider.length;
    this.slide = this.slider[this.currentIndex];
  }
}
