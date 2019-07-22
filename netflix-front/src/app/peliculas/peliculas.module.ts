import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPeliculasComponent } from './listar-peliculas/listar-peliculas.component';
import { VerPeliculaComponent } from './ver-pelicula/ver-pelicula.component';
import { PeliculaService } from './peliculas.service';
import { HttpClientModule } from '@angular/common/http';
import {VgCoreModule} from "videogular2/compiled/src/core/core";
import {VgControlsModule} from "videogular2/compiled/src/controls/controls";

@NgModule({
  declarations: [
    ListarPeliculasComponent, 
    VerPeliculaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule
  ],
  providers: [
    PeliculaService
  ]
})
export class PeliculasModule { }
