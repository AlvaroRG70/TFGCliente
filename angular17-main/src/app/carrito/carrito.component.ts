import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  pedido: any
  servicios: any[] = [];
  totalCarrito: number = 0;

  public payPalConfig ? : IPayPalConfig;

  constructor(private http: HttpClient, private ApiServiceService: ApiServiceService, private route: ActivatedRoute, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initConfig()
    this.carritoCompra()
    }

  carritoCompra(): void {
    this.ApiServiceService.getCarrito().subscribe((data: any) => {
      console.log(data)
      this.pedido = data
      this.servicios = data.detalles_carrito;
      this.totalCarrito = data.total_carrito;
      console.log(this.servicios)
    });
  }


  eliminarDelCarrito(id: string): void {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (confirmacion) {
      this.ApiServiceService.deleteServicioCarrito(id).subscribe(
        response => {
          this.router.navigate(['carrito'])
          alert('Servicio eliminado del carrito correctamente');
          window.location.reload();
        },
        error => {
          console.error('Error al eliminar el producto:', error);
        }
      );
    }
  }

  pagarPedido(idPedido: string): void {
    this.ApiServiceService.idPedido = idPedido
    this.ApiServiceService.postPago().subscribe(
      response => {
        alert('Carrito pagado correctamente');
        this.router.navigate([`pago/${idPedido}`]);
      },
      error => {
        console.error('Error al pagar el carrito:', error);
        alert('Carrito vacío')
        // Manejar el error de eliminación
      }
    );
  }


  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: 'AQ59a7WQftmR4OEJLEPvR9MBhwmYrYSZEbaM_ymDwrzWEHeAmxIxJTdwPqEfspfe3p1SK6y1wBLrUZxt',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: '9.99',
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: '9.99'
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: '9.99',
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details: any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
     
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);


        },
        onError: err => {
            console.log('OnError', err);

        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);

        }
    };
}



}
