import {Controller, Get, Param, Req, Res} from "@nestjs/common";
import { PeliculaService } from "./pelicula.service";
import * as fs from "fs";

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
        @Param() parametros,
        @Res() res,
        @Req() req
    ){
        const pelicula = this.peliculaService.obtenerPelicula(parametros.id)
        const path= __dirname+'/../assets/'+pelicula.ubicacion;
        const stat = fs.statSync(path)
        const fileSize = stat.size
        const range = req.headers.range
        if (range){
            const parts = range.replace(/bytes=/, "").split("-")
            const start = parseInt(parts[0], 10)
            const end = parts[1]
                ? parseInt(parts[1], 10)
                : fileSize-1
            const chunksize = (end-start)+1
            console.log(chunksize)
            const file = fs.createReadStream(path, {start, end})
            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': 8000,
                'Content-Type': 'video/mp4',
            }
            res.writeHead(206, head);
            file.pipe(res);
        } else{
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4',
            }
            res.writeHead(200,head)
            fs.createReadStream(path).pipe(res)
        }
    }

}
