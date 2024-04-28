import { Time } from "@angular/common";

export class Instalacion {
    public id_insta: number = 0;
    public nombre: string = "";
    public actividad: string = "";
    public estado: string = "";
    public ubicacion: string = "";
    public horario_inicio: Time | undefined;
    public horario_fin: Time | undefined;

    constructor(id_insta:number, nombre:string, actividad:string, estado:string, ubicacion:string, horario_inicio:Time, horario_fin:Time){
        this.id_insta = id_insta;
        this.nombre = nombre;
        this.actividad = actividad;
        this.estado = estado;
        this.ubicacion = ubicacion;
        this.horario_inicio = horario_inicio;
        this.horario_fin = horario_fin;
    }
}
