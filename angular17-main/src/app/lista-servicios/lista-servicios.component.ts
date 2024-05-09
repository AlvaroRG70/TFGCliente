import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../services/api-service.service';



@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrl: './lista-servicios.component.scss'
})
export class ListaServiciosComponent {
  servicios: any[] = [];
  
  constructor(private http: HttpClient, private ApiServiceService: ApiServiceService) { } 

  ngOnInit(): void {
    this.listaServicios()
    }

  listaServicios(): void {
    this.ApiServiceService.getServicios().subscribe((data: any) => {
      this.servicios = data;
      console.log(this.servicios)
    });
  }
}
  
  
