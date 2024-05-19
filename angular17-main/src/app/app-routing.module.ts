import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  
import { WatchlistComponent } from './watchlist/watchlist.component';  

import { FilmComponent } from './film/film.component'; 
import { BuscadorComponent } from './buscador/buscador.component'; 
import {RegistroComponent } from './registro/registro.component';
import {WatchlistRealComponent } from './watchlist-real/watchlist-real.component';
import { LoginComponent } from './login/login.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';
import { CrearServicioComponent } from './crear-servicio/crear-servicio.component';
import { ServicioComponent } from './servicio/servicio.component';
import { EditarServicioComponent } from './editar-servicio/editar-servicio.component';
import { EditarReseniaComponent } from './editar-resenia/editar-resenia.component';
import { CarritoComponent } from './carrito/carrito.component';






const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'film/:id', component: FilmComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'w-real', component: WatchlistRealComponent },
  { path: 'lista/servicios', component: ListaServiciosComponent },
  { path: 'crear/servicios', component: CrearServicioComponent },
  { path: 'servicio/:id', component: ServicioComponent },
  { path: 'editar/servicio/:id_servicio', component: EditarServicioComponent },
  { path: 'editar/resenia/:id_resenia', component: EditarReseniaComponent },
  { path: 'carrito', component: CarritoComponent },










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
