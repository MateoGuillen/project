import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [
    new Cliente(1,"mateo","guillen","mateo@gmail.com","10/9/2022"),
    new Cliente(2,"seichi","shirai","seichi@gmail.com","10/9/2022"),
    new Cliente(3,"oscar","vega","oscar@gmail.com","10/9/2022"),
  ];

  constructor() { }

  getClientes(): Observable<Cliente[]>{
    return of(this.clientes)
  }
}
