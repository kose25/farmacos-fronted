import { Component } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proveedor-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proveedor-lista.component.html',
  styleUrl: './proveedor-lista.component.css'
})
export class ProveedorListaComponent {

  proveedores: Proveedor[];

  constructor(private proveedorServicio: ProveedorService, private enrutador: Router){}

  ngOnInit(){
    this.obtenerProveedores();
  }

  private obtenerProveedores(){
    this.proveedorServicio.obtenerProveedoresLista().subscribe(
      (datos=>{
        this.proveedores = datos;
      })
    );
  }

  eliminarProveedor(id:number){
    this.proveedorServicio.eliminarProveedor(id).subscribe(
      {
        next: (datos) => this.obtenerProveedores(),
        error: (errores) => console.log(errores)
      }
    );
  }

  editarProveedor(id: number){
    this.enrutador.navigate(['editar-proveedor', id]);
  }

}
