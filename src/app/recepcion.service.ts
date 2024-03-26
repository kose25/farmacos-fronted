import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from './proveedor';
import { Observable } from 'rxjs';
import { Recepcion } from './recepcion';

@Injectable({
  providedIn: 'root'
})
export class RecepcionService {

  private  urlBase = "http://localhost:8080/farmacos-app/recepcion";
  private urlRecepcionByProveedor = "http://localhost:8080/farmacos-app/recepcionbyproveedor";

  constructor(private clienteHttp: HttpClient) {

   }

   obtenerRecepcionLista(): Observable<Recepcion[]>{
    return this.clienteHttp.get<Recepcion[]>(this.urlBase);
  }

  agregarRecepcion(recepcion: Recepcion): Observable<Object>{
    return this.clienteHttp.post(this.urlBase, recepcion);
  }

  eliminarRecepcion(id: number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }

  obtenerRecepcionById(id: number){
    return this.clienteHttp.get<Recepcion>(`${this.urlBase}/${id}`);
  }

  editarRecepcion(id: number, recepcion: Recepcion): Observable<Object>{
    console.log(recepcion);
    return this.clienteHttp.put(`${this.urlBase}/${id}`, recepcion);
  }

}
