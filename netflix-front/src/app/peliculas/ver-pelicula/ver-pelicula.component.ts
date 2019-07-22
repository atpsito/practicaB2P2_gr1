import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-ver-pelicula',
  templateUrl: './ver-pelicula.component.html',
  styleUrls: ['./ver-pelicula.component.css']
})
export class VerPeliculaComponent implements OnInit {
  srcPelicula:string = '#';
  constructor(
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(parametro=>{
      this.srcPelicula = environment.url+environment.port+'/pelicula/'+parametro.id
    })

  }

}
