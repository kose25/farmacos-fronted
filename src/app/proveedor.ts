import { Estado } from "./estado";
import { TipoDocumento } from "./tipo-documento";
export class Proveedor {
    id: number;
    nombre: string;
    numeroIdentifiacion: string;
    direccion: string;
    nombreContacto: string;
    celular: string;
    estado: Estado;
    tipoDocumento: TipoDocumento
}
