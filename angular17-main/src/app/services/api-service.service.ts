import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1/';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  private getHeaders(): HttpHeaders {
    const token = this.tokenService.getToken();
    const token2 = 'fX66pbJrNfpEXNvdEw30encqBkVt12'

    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getServicios(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}`+`servicios`, { headers })
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
  
}
