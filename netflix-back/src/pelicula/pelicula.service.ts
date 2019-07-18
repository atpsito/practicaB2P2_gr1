import { Injectable } from "@nestjs/common";
import { listaPeliculas } from "src/constantes/lista-peliculas";

@Injectable()
export class PeliculaService{

    obtenerListaPeliculas(){
        return listaPeliculas;
    }

    obtenerPelicula(id){
        const pelicula = listaPeliculas.find(
            (pelicula)=>{
                return pelicula.id == id
            }
            )

            return pelicula
    }

}