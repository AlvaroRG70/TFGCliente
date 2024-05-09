import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  nombre: string="";
  password:string="";
  errorMensaje: string = "";
  constructor(private router: Router,

    private loginService: LoginService,
    private tokenService: TokenService
  ) { }

//------------------
  loginFormulario() {

    const user = {usuario:this.nombre,pass:this.password};
    this.loginService.loginUsuario(user).subscribe((data)=>{
      // Almacena el token en sessionStorage
      sessionStorage.setItem('token', data.access_token);
      // Almacena el nombre de usuario en sessionStorage
      sessionStorage.setItem('nombreUsuario', this.nombre);
      this.router.navigate(['/']);
      setTimeout(() => {
        window.location.reload();
      }, 100);
    },error => {
      this.errorMensaje = "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
    });

  }
//--------------


  // loginFormulario() {

  //   const user = {usuario:this.nombre,pass:this.password}
  //   this.loginService.loginUsuario(user).subscribe((data)=>{
  //     this.tokenService.setToken(data.access_token);
  //     this.router.navigate(['/']);
  //   },error => {
  //     this.errorMensaje = "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
  //   });

  // }

}