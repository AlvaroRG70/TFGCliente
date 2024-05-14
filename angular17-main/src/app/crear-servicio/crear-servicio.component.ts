import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrl: './crear-servicio.component.scss'
})
export class CrearServicioComponent {

  servicios: any[] = [];

  nombre: string=""
  descripcion: string=""
  precio: string=""

  constructor(private http: HttpClient, private createService: ApiServiceService, private router: Router,private toastr: ToastrService) { } 


  servicioCreate() {
    const dataSignUp = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
    };
    this.createService.createServicios(dataSignUp)
      .subscribe(
        response => {
          this.router.navigate(['lista/servicios']);
          this.toastr.success('El servicio se ha creado correctamente', 'Éxito');

        },
        error => {
          console.log(error);
        }
      );

  }

}
