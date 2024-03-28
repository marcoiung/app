import { Component } from '@angular/core';
import { IIndicators, ISlide } from './model/carrousel';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {

  slider: ISlide[] = [
    {
      idx:0,
      src: '/assets/img/carrousel/img02.svg',
      icon:'/assets/icon/house_transp.svg',
      h1: 'Seguro Residencial',
      h2: 'Sua casa é lugar de paz e felicidade. Garanta que continue assim.',
      alt: 'imagem Caixa Residencial',
      btnText: 'Contrate Agora'
    },
    {
      idx:1,
      src: '/assets/img/carrousel/img01.svg',
      icon:'/assets/icon/house_transp.svg',
      h1: 'Seguro Residencial',
      h2: 'Mais barato do que você pensa. Mais completo do que você imagina',
      alt: 'imagem Caixa Residencial',
      btnText: 'Contrate Agora'
    },
    {
      idx:2,
      src: '/assets/img/carrousel/img04.svg',
      icon:'/assets/icon/house_transp.svg',
      h1: 'Residencial Fácil',
      h2: 'A proteção para sua casa com pagamento único ou mensal e assistências exclusivas.',
      alt: 'imagem Caixa Residencial Fácil',
      btnText: 'Contrate Agora'
    },
    {
      idx:3,
      src: '/assets/img/carrousel/img03.svg',
      icon:'/assets/icon/house_transp.svg',
      h1: 'Residencial Fácil',
      h2: 'A proteção para sua casa com pagamento único ou mensal e assistências exclusivas.',
      alt: 'imagem Caixa Residencial Fácil',
      btnText: 'Contrate Agora'
    }
  ];

  slide!:ISlide;

  currentIndex = 0;
  intervalID: undefined | ReturnType<typeof setTimeout>;
  indicator: IIndicators;

  ngOnInit(){
    this.slide = this.slider[0];
  }

  indicatorClicked( indicator: Event) {

    const selected = (indicator.target as Element).id;
    this.indicator = {  id: selected, index: +selected -1 };

    this.currentIndex = this.indicator.index;
    this.slide = this.slider[this.indicator.index];


    /** Carrega o slide selecionado */
    this.executeSlideShow(true);

    /** CurrentIndex será igual ao  */

  }

  ngAfterViewInit(): void {
    this.executeSlideShow(false);
  }

  resetInterval(){
    clearTimeout(this.intervalID);
    this.executeSlideShow(false);
  }


  executeSlideShow(reset:boolean){

    const time = 8000;

    if(reset){
      this.resetInterval();
      return;
    }

    this.intervalID = setInterval(() => {

      if(this.currentIndex < 3) {
        this.currentIndex ++;
        this.slide = this.slider[this.currentIndex];
      }else{
        this.currentIndex = 0;
        this.slide = this.slider[this.currentIndex];
      }

   }, time );

  }
}
