import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../peliculas.service';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent implements OnInit {
  peliculas;
  constructor(
    private readonly _peliculasService: PeliculaService
  ){ }

  ngOnInit() {
    this._peliculasService.consultarPeliculas().subscribe(   
      (peliculas)=>{
      this.peliculas = peliculas
  })
  }

}
