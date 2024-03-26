import { Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ProveedorListaComponent } from './proveedor-lista/proveedor-lista.component';
import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { RecepcionListaComponent } from './recepcion-lista/recepcion-lista.component';
import { AgregarRecepcionComponent } from './agregar-recepcion/agregar-recepcion.component';

export const routes: Routes = [
    {path:'productos', component: ProductoListaComponent},
    {path:'', redirectTo:'productos', pathMatch:'full'},
    {path:'agregar-producto', component: AgregarProductoComponent},
    {path: 'editar-producto/:id', component: EditarProductoComponent},
    {path:'proveedores', component: ProveedorListaComponent},
    {path:'agregar-proveedor', component: AgregarProveedorComponent},
    {path: 'editar-proveedor/:id', component: EditarProveedorComponent},
    {path:'recepcion', component: RecepcionListaComponent},
    {path:'agregar-recepcion', component: AgregarRecepcionComponent},
    {path:'agregar-recepcion/:id', component: AgregarRecepcionComponent},
];
