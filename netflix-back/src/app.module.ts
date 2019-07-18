import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculaModule } from './pelicula/pelicula.module';

@Module({
  imports: [
    PeliculaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
