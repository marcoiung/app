import { Component, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { IAppState, setExibition } from 'src/app/store/app.state';
import { IShowHideMegaMenu } from 'src/app/store/model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  showHideMegaMenu: IShowHideMegaMenu;
  showMenu: boolean = false;
  isMobile:boolean = false;

  constructor(
    private store: Store<{ app: IAppState}>) { }

  ngOnInit(): void {
    this.showMenu = false;
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {

    const scrWidth = window.innerWidth;

    if(scrWidth >= 1000) {
      this.isMobile = false;
    }

    if(scrWidth < 1000) {
      this.isMobile = true;
    }
  }


  showMega(event:boolean){
    this.showMenu = event;
    console.log('ShowMega: ', event);
  }
}
