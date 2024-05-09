import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.scss'
})
export class ServicioComponent implements OnInit{

  servicio_id: number = 0;
  servicio: any;

  constructor(private http: HttpClient, private ApiServiceService: ApiServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.servicioSimple(this.servicio_id)
  }

  servicioSimple(id: number){
    this.route.params.subscribe(params => {
      id = +params['id'];
      this.ApiServiceService.getServicio(id).subscribe((data: any) => {
        return this.servicio = data;
      });
    });
  }


  eliminarProducto(id: number): void {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (confirmacion) {
      this.ApiServiceService.deleteServicio(id).subscribe(
        response => {
          this.router.navigate(['lista/servicios'])
          alert('Servicio eliminado correctamente');
        },
        error => {
          console.error('Error al eliminar el producto:', error);
          // Manejar el error de eliminación
        }
      );
    }
  }


}
