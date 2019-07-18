import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PeliculaService{
    constructor(
        private readonly _httpClient: HttpClient
    ){}

    consultarPeliculas(){
        return this._httpClient.get(environment.url+environment.port+'/pelicula/lista')
    }
}