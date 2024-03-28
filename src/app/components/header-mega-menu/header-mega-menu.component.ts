import { setExibition } from './../../store/app.state';
import { Component, EventEmitter, HostListener, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { map } from 'rxjs/operators';
import { IShowHideMegaMenu } from 'src/app/store/model/model';

@Component({
  selector: 'app-header-mega-menu',
  templateUrl: './header-mega-menu.component.html',
  styleUrls: ['./header-mega-menu.component.scss']
})
export class HeaderMegaMenuComponent implements OnInit {
  @Input() showMenuInitial:boolean;
  @Input() isMobile:boolean; // menu mobile menu desktop show hide.
  @Output() showHideMenu: EventEmitter<boolean> = new EventEmitter();

  showHideMegaMenu: boolean; // Hamburguer clicked.
  showHide:boolean;  // Produtos clicked.
  showMobile: boolean;

  constructor(
    private store: Store<{ app: IAppState}>
    ) { }

  ngOnInit(): void {
    console.log('É mobilde? : ', this.isMobile);
    this.showMobile = this.isMobile;
  }

  ngOnChanges(changes: SimpleChanges) {

    const show: boolean = changes.showMenuInitial.currentValue;
    this.showHide = show;

  }

  showHideMobileMegaMenu(){
    this.showHideMegaMenu = !this.showHideMegaMenu;

    console.log('showHideMegaMernu: ', this.showHideMegaMenu)

  }

  setExibition(showHideMegaMenu: IShowHideMegaMenu): void {
    const payload: IShowHideMegaMenu = showHideMegaMenu;
    this.store.dispatch(setExibition({ payload }));
  }

  show(){
    this.showHideMenu.emit(!this.showHide);
  }
}
