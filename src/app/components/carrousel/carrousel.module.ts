import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide/slide.component';
import { CarrouselComponent } from './carrousel.component';

@NgModule({
  declarations: [SlideComponent],
  imports: [
    CommonModule
  ],
  exports: [SlideComponent],
})
export class CarrouselModule { }

