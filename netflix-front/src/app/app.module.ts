import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasModule } from './peliculas/peliculas.module';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PeliculasModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
