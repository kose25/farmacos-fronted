import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Proveedor } from './proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private  urlBase = "http://localhost:8080/farmacos-app/proveedores";

  constructor(private clienteHttp: HttpClient) { }

  obtenerProveedoresLista(): Observable<Proveedor[]>{
    return this.clienteHttp.get<Proveedor[]>(this.urlBase);
  }

  agregarProveedor(proveedor: Proveedor): Observable<Object>{
    return this.clienteHttp.post(this.urlBase, proveedor);
  }

  eliminarProveedor(id: number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }

  obtenerProveedorById(id: number){
    return this.clienteHttp.get<Proveedor>(`${this.urlBase}/${id}`);
  }

  editarProveedor(id: number, proveedor: Proveedor): Observable<Object>{
    console.log(proveedor);
    return this.clienteHttp.put(`${this.urlBase}/${id}`, proveedor);
  }

}
