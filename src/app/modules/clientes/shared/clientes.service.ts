import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs';

import { Cliente } from './clientes.model';


@Injectable({
  providedIn: "root"
})
export class ClientesService {

  private httpOptions = {headers: new HttpHeaders(
    { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json, */*;q=0.5'
    }
  )};
  private clientesUrl = 'http://127.0.0.1:5000/pacientes'
  //private clientesUrl = 'api/clientes'

  constructor(public http: HttpClient ) {  }

  getClientes(): Observable<any[]>{
    return this.http.get<any[]>(`${this.clientesUrl}/`, this.httpOptions)
  }

  getCliente(id: number ): Observable<Cliente>{
    let url = `${this.clientesUrl}/${id}`;
    return this.http.get<Cliente>(url)
  }

  delete(cliente: Cliente | number): Observable<Cliente>{
    const id = typeof cliente == 'number' ? cliente : cliente.id;
    const url = `${this.clientesUrl}/${id}`;
    return this.http.delete<Cliente>(url, this.httpOptions)
  }

  update(cliente: Cliente): Observable<any>{
    const url = `${this.clientesUrl}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente,this.httpOptions);
  }

  addCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.clientesUrl}/`, cliente ,this.httpOptions)
  }

}
