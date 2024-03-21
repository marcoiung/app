import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISlide } from '../model/carrousel';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent implements OnChanges {
  @Input() slide:ISlide


  next:ISlide;


  ngOnChanges(changes: SimpleChanges) {

    const next = changes['slide'].currentValue;

    if (next) {
      this.slide = next;
    }
  }

}
