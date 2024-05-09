import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FilmComponent } from './film/film.component';

import { BuscadorComponent } from './buscador/buscador.component';
import { RegistroComponent } from './registro/registro.component';
import { WatchlistRealComponent } from './watchlist-real/watchlist-real.component';
import { LoginComponent } from './login/login.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';
import { CrearServicioComponent } from './crear-servicio/crear-servicio.component';
import { ServicioComponent } from './servicio/servicio.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    WatchlistComponent,
    FilmComponent,

    BuscadorComponent,
    RegistroComponent,
    WatchlistRealComponent,
    LoginComponent,
    ListaServiciosComponent,
    CrearServicioComponent,
    ServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
