import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DjangoService } from '../services/django-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent{


  username: string=""
  email: string=""
  contrasenia1: string=""
  contrasenia2: string=""
  rol: string ="";

  constructor(private router: Router,  
            private registroService: DjangoService){}

  registroFormulario() {
    const dataSignUp = {
      username: this.username,
      email: this.email,
      password1: this.contrasenia1,
      password2: this.contrasenia2,
      rol: 2,
    };
    this.registroService.registrar(dataSignUp)
      .subscribe(
        response => {
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
