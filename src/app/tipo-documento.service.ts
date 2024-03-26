import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDocumento } from './tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  private  urlBase = "http://localhost:8080/farmacos-app/tipodocumento";

  constructor(private clienteHttp: HttpClient) { }

  obtenerTiposDocumentosLista(): Observable<TipoDocumento[]>{
    return this.clienteHttp.get<TipoDocumento[]>(this.urlBase);
  }
}
