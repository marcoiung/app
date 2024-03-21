import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { MainComponent } from '../../components/main/main.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarrouselComponent, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
