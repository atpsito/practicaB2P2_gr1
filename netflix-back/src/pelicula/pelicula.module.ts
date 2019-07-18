import { Module } from "@nestjs/common";
import { PeliculaController } from "./pelicula.controller";
import { PeliculaService } from "./pelicula.service";

@Module({
    imports:[],
    controllers:[
        PeliculaController
    ],
    providers:[
        PeliculaService
    ]
})
export class PeliculaModule{}