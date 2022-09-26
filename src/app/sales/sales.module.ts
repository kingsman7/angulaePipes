import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommunsComponent } from './pages/no-communs/no-communs.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortsComponent } from './pages/sorts/sorts.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';

import { SortPipe } from './pipes/sort.pipe';
import { IsFlyPipe } from './pipes/is-fly.pipe';


@NgModule({
  declarations: [
    NumbersComponent,
    NoCommunsComponent,
    BasicsComponent,
    SortsComponent,
    SortPipe,
    IsFlyPipe
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
