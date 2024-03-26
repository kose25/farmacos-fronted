import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recepcion } from '../recepcion';
import { RecepcionService } from '../recepcion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recepcion-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recepcion-lista.component.html',
  styleUrl: './recepcion-lista.component.css'
})
export class RecepcionListaComponent {

  recepciones: Recepcion[];

  constructor(private recepcionServicio: RecepcionService, private enrutador: Router){

  }

  ngOnInit(){
    this.obtenerRecepcion();
  }

  private obtenerRecepcion(){
    this.recepcionServicio.obtenerRecepcionLista().subscribe(
      (datos=>{
        this.recepciones = datos;
      })
    );
  }

  eliminarRecepcion(id:number){
    this.recepcionServicio.eliminarRecepcion(id).subscribe(
      {
        next: (datos) => this.obtenerRecepcion(),
        error: (errores) => console.log(errores)
      }
    );
  }

  editarRecepcion(id: number){
    this.enrutador.navigate(['agregar-recepcion', id]);
  }



}
