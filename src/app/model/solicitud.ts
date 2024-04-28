export class Solicitud {
    public id: number = 0;
    public nombre: String = "";
    public apellido: String = "";
    public correo: String = "";
    public telefono: number = 0;
    public identificacion: number = 0;
    public categoria: String = "";
    public ocupantes: number = 0;
    public check_in: Date | undefined;
    public check_out: Date | undefined;

    constructor(id:number, nombre:String, apellido:String, correo:String, telefono:number, identificacion:number, categoria:String, ocupantes:number, check_in:Date, check_out:Date){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.identificacion = identificacion;
        this.categoria = categoria;
        this.ocupantes = ocupantes;
        this.check_in = check_in;
        this.check_out = check_out;
    }
}
