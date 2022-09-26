import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import LocaleEsCo from '@angular/common/locales/es-CO'
import LocaleFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common'

registerLocaleData(LocaleEsCo)
registerLocaleData(LocaleFr)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SalesModule,
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
