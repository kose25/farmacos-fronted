import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDocumento } from '../tipo-documento';
import { TipoDocumentoService } from '../tipo-documento.service';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-editar-proveedor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-proveedor.component.html',
  styleUrl: './editar-proveedor.component.css'
})
export class EditarProveedorComponent {
  proveedor: Proveedor = new Proveedor();
  id: number;
  tiposDocumentos: TipoDocumento[];

  constructor(private proveedorServicio: ProveedorService, private ruta: ActivatedRoute, private enrutador: Router, private tipoDocumentoService: TipoDocumentoService){
  }

  ngOnInit(){    
    this.id = this.ruta.snapshot.params['id'];
    this.obtenerTiposDocumentos();
    this.proveedorServicio.obtenerProveedorById(this.id).subscribe({
      next: (datos) => this.proveedor = datos,
      error: (errores: any) => console.log(errores)
    });
  }

  onSubmit(){
    this.editarProveedor();
  }

  private obtenerTiposDocumentos(){
    this.tipoDocumentoService.obtenerTiposDocumentosLista().subscribe(
      (datos=>{
        this.tiposDocumentos = datos;
      })
    );
  }

  editarProveedor(){
    this.proveedorServicio.editarProveedor(this.id, this.proveedor).subscribe(
      {
        next: (datos) => this.irProveedorLista(),
        error: (errores) => console.log(errores)
      }
    );
  }

  irProveedorLista(){
    this.enrutador.navigate(['/proveedores']);
  }

}
