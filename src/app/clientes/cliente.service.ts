import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of, throwError } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  /*clientes: Cliente[] = [
    new Cliente(1,"mateo","guillen","mateo@gmail.com","10/9/2022"),
    new Cliente(2,"seichi","shirai","seichi@gmail.com","10/9/2022"),
    new Cliente(3,"oscar","vega","oscar@gmail.com","10/9/2022"),
  ];*/

  constructor(private http: HttpClient, private router: Router) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint);
    /*return this.http.get(this.urlEndPoint).pipe(
      map((response)=> response as Cliente[])
    )*/
  }

  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders}).pipe(
      catchError( e => {
        this.router.navigate(['/clientes']);
        console.log(e)
        Swal.fire({
          title: 'Error al crear!',
          text: e.error.message,
        });
        return throwError(() => e);
      })
    );
  }

  getCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError( e => {
        this.router.navigate(['/clientes']);
        console.log(e)
        Swal.fire({
          title: 'Error al Editar!',
          text: e.error.message,
        });
        return throwError(() => e);
      })
    );
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }

  delete(id: number ): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError( e => {
        this.router.navigate(['/clientes']);
        console.log(e)
        Swal.fire({
          title: 'Error al borrar!',
          text: e.error.message,
        });
        return throwError(() => e);
      })
    );
  }


}
