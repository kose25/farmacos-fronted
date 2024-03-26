import { Estado } from "./estado";
import { Producto } from "./producto";
import { Proveedor } from "./proveedor";

export class Recepcion {
    id: number;
    producto: Producto;
    proveedor: Proveedor;
    fechaRecepcion: Date;
    numeroFactura: string;
    cantidad: number;
    registroInvima: string;
    fechaVencimiento: Date;
    descripcion: string;
    estado: Estado;
}
