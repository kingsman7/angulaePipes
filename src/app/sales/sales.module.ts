import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommunsComponent } from './pages/no-communs/no-communs.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortsComponent } from './pages/sorts/sorts.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommunsComponent,
    BasicsComponent,
    SortsComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule
  ],
  exports:[
    NumbersComponent,
    NoCommunsComponent,
    BasicsComponent,
    SortsComponent
  ]
})
export class SalesModule { }
