import { Component } from '@angular/core';
import { MainSession01Component } from './components/main-session-01/main-session-01.component';
import { MainSession02Component } from './components/main-session-02/main-session-02.component';
import { MainSession03Component } from './components/main-session-03/main-session-03.component';
import { MainSession04Component } from './components/main-session-04/main-session-04.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainSession01Component,MainSession02Component,MainSession03Component,MainSession04Component],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
