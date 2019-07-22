import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPeliculasComponent } from './peliculas/listar-peliculas/listar-peliculas.component';
import { VerPeliculaComponent } from './peliculas/ver-pelicula/ver-pelicula.component';

const routes: Routes = [
  {
    path:'peliculas',
    component:ListarPeliculasComponent
  },
  {
    path:'play/:id',
    component: VerPeliculaComponent
  },
  {
    path: '',
    redirectTo: 'peliculas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
