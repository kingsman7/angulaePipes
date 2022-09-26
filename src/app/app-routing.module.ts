import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NoCommunsComponent } from './sales/pages/no-communs/no-communs.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { SortsComponent } from './sales/pages/sorts/sorts.component';

const routes: Routes = [

  {
    path: '',
    component: BasicsComponent,
    pathMatch:'full'
  },
  {
    path:'not-commons',
    component:NoCommunsComponent
  },
  {
    path:'numbers',
    component:NumbersComponent
  },
  {
    path:'sort',
    component:SortsComponent
  },
  {
    path:'**',
    redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
