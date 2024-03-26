import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';
import { TipoDocumento } from '../tipo-documento';
import { TipoDocumentoService } from '../tipo-documento.service';

@Component({
  selector: 'app-agregar-proveedor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-proveedor.component.html',
  styleUrl: './agregar-proveedor.component.css'
})
export class AgregarProveedorComponent {
    proveedor: Proveedor = new Proveedor();
    tiposDocumentos: TipoDocumento[];

    constructor(private proveedorServicio: ProveedorService, private enrutador: Router, private tipoDocumentoService: TipoDocumentoService){
    }

    ngOnInit(){
      this.obtenerTiposDocumentos();
    }

    onSubmit(){
      this.guardarProveedor();
    }

    guardarProveedor(){
      this.proveedorServicio.agregarProveedor(this.proveedor).subscribe({
        next: (datos) =>{
          this.irListaProveedor();
        },
        error: (error: any) => {
          console.log(error)
        }
      })
    }

    irListaProveedor(){
      this.enrutador.navigate(['/proveedores'])
    }
    private obtenerTiposDocumentos(){
      this.tipoDocumentoService.obtenerTiposDocumentosLista().subscribe(
        (datos=>{
          this.tiposDocumentos = datos;
        })
      );
    }

}
