export class Huesped {
    public id_huesped: number = 0;
    public identificacion: number = 0;
    public nombre: string = "";
    public apellido: string = "";
    public telefono: string = "";
    public correo: string = "";
    public reserva: number = 0;

    constructor(id_huesped: number, identificacion:number, nombre: string, apellido:string, telefono:string, correo:string, reserva: number){
        this.id_huesped = id_huesped;
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.reserva = reserva;
    }

}
