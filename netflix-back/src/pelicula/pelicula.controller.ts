import { Controller, Get, Param } from "@nestjs/common";
import { PeliculaService } from "./pelicula.service";

@Controller('pelicula')
export class PeliculaController{
    
    constructor(
        private readonly peliculaService: PeliculaService
    ){}

    @Get('lista')
    obtenerPeliculas(){
        return this.peliculaService.obtenerListaPeliculas()
    }

    @Get(':id')
    obtenerPelicula(
        @Param() parametros
    ){
        return this.peliculaService.obtenerPelicula(parametros.id)
    }

}