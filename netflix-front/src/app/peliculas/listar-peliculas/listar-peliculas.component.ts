import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../peliculas.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent implements OnInit {
  peliculas;
  constructor(
    private readonly _peliculasService: PeliculaService,
    private readonly _router: Router
    ){ }

  ngOnInit() {
    this._peliculasService.consultarPeliculas().subscribe(   
      (peliculas)=>{
      this.peliculas = peliculas
  })
  }

  irReproductor(id:number){
    this._router.navigate(['play', id])
  }

}
