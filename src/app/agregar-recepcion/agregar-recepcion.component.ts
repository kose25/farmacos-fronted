import { Component } from '@angular/core';
import { Recepcion } from '../recepcion';
import { Proveedor } from '../proveedor';
import { Producto } from '../producto';
import { RecepcionService } from '../recepcion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { ProveedorService } from '../proveedor.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-recepcion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './agregar-recepcion.component.html',
  styleUrl: './agregar-recepcion.component.css'
})
export class AgregarRecepcionComponent {

  recepcion: Recepcion = new Recepcion();
  proveedores: Proveedor[];
  productos: Producto[];
  id: number;

  constructor(private recepcionServicio: RecepcionService, private enrutador: Router, private productosServicio: ProductoService, private proveedorService: ProveedorService, private ruta: ActivatedRoute){}

  ngOnInit(){    
    this.id = this.ruta.snapshot.params['id'];
    if(this.id > 0 ){
      this.recepcionServicio.obtenerRecepcionById(this.id).subscribe({
        next: (datos) => this.recepcion = datos,
        error: (errores: any) => console.log(errores)
      });
      console.log(this.recepcion);    
    }
    this.obtenerProductos();
    this.obtenerProveedores();
  }

  onSubmit(){
    if(this.recepcion.id > 0){
      this.editarRecepcion();
    }else{
      this.guardarRecepcion();
    }    
  }

  private obtenerProductos(){
    this.productosServicio.obtenerProductosLista().subscribe(
      (datos=>{
        this.productos = datos;
      })
    );
  }

  private obtenerProveedores(){
    this.proveedorService.obtenerProveedoresLista().subscribe(
      (datos=>{
        this.proveedores = datos;
      })
    );
  }

  guardarRecepcion(){
    this.recepcionServicio.agregarRecepcion(this.recepcion).subscribe(
      {
        next: (datos) =>{
          this.irListaRecepcion();
        },
        error: (error: any) =>{
          console.log(error)
        }
      }
    );
  }

  irListaRecepcion(){
    this.enrutador.navigate(['/recepcion']);
  }

  editarRecepcion(){
    this.recepcionServicio.editarRecepcion(this.id, this.recepcion).subscribe(
      {
        next: (datos) => this.irListaRecepcion(),
        error: (errores) => console.log(errores)
      }
    );
  }
}
