import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { HeaderComponent } from './header/header.component';
import { CarrouselModule } from './carrousel/carrousel.module';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderMegaMenuComponent } from './header-mega-menu/header-mega-menu.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { BradcrumbComponent } from './bradcrumb/bradcrumb.component';
import { HeaderMegaComponent } from './header-mega/header-mega.component';
import { MegaMenuMobileComponent } from './mega-menu-mobile/mega-menu-mobile.component';

@NgModule({
  declarations: [HeaderComponent, HeaderMegaComponent, HeaderMegaMenuComponent, MegaMenuComponent, MegaMenuMobileComponent, CarrouselComponent, BradcrumbComponent, MainComponent, FooterComponent, BradcrumbComponent, HeaderMegaComponent, MegaMenuMobileComponent],
  imports: [
    CommonModule,
    MainModule,
    CarrouselModule
  ],
  exports: [HeaderComponent, HeaderMegaComponent, HeaderMegaMenuComponent, MegaMenuComponent, MegaMenuMobileComponent, CarrouselComponent, BradcrumbComponent, MainComponent, FooterComponent],
})
export class ComponentsModule { }
