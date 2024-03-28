import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSession01Component } from './components/main-session-01/main-session-01.component';
import { MainSession02Component } from './components/main-session-02/main-session-02.component';
import { MainSession03Component } from './components/main-session-03/main-session-03.component';
import { MainSession04Component } from './components/main-session-04/main-session-04.component';
import { MainSession05Component } from './components/main-session-05/main-session-05.component';

@NgModule({
  declarations: [
    MainSession01Component,
    MainSession02Component,
    MainSession03Component,
    MainSession04Component,
    MainSession05Component],
  imports: [
    CommonModule
  ],
  exports: [
    MainSession01Component,
    MainSession02Component,
    MainSession03Component,
    MainSession04Component,
    MainSession05Component],
})
export class MainModule { }
