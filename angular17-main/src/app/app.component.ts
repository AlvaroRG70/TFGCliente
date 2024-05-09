import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service'; 
import { Router } from '@angular/router';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
}) 
export class AppComponent {
  title = 'angular17';
  peliculaId: string = '';
  NombreUsuario:string = '';
  eltoken:string = '';
  constructor(private router: Router,private PeliculasService: PeliculasService, private tokenService: TokenService,) { }


  buscar() {
    this.PeliculasService.setTerminoBusqueda(this.peliculaId);
    this.router.navigate(['/buscador']);
  }


  //-------------------
  ngOnInit(): void {
    this.getNombreUsuarioFromSessionStorage();
    this.getTokenFromSessionStorage();
  }

  getTokenFromSessionStorage(): void {
    this.eltoken = sessionStorage.getItem('token') || '';
  }

  getNombreUsuarioFromSessionStorage(): void {
    this.NombreUsuario = sessionStorage.getItem('nombreUsuario') || '';
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    this.NombreUsuario = '';
    this.eltoken = '';
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  tieneToken(): boolean {
    return !!sessionStorage.getItem('token');
  }

//-------------------------
  // ngDoCheck(): void {
  //   this.getUserLogged();
  // }

  // tieneToken() {
  //   return this.tokenService.getToken();
  // }

  // logout() {
  //   this.tokenService.logout();
  // }

  // getUserLogged() {
  //   if (this.tokenService.getToken()){
  //     this.tokenService.getUserLogged().subscribe((user) => {
  //       this.NombreUsuario = user.username
  //     });
  //   }
  // }
}
