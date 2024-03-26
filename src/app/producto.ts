import { Estado } from "./estado";

export class Producto {
    id: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    laboratorio: string;
    estado: Estado;
}
