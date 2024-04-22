import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
}) 
export class AppComponent {
  title = 'angular17';
  peliculaId: string = '';
  constructor(private router: Router,private PeliculasService: PeliculasService) { }


  buscar() {
    this.PeliculasService.setTerminoBusqueda(this.peliculaId);
    this.router.navigate(['/buscador']);
  }
}
