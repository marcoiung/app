import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { CentralAtendimentoComponent } from './pages/central-atendimento/central-atendimento.component';

const routes: Routes = [
  {
    path: "" ,
    component: HomeComponent
  },
  // {
  //   path: "/quem" ,
  //   component: QuemSomosComponent
  // },
  // {
  //   path: "/central-atendimento" ,
  //   component: CentralAtendimentoComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
