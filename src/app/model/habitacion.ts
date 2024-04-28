export class Habitacion {
    public numero: number = 0;
    public categoria: string ="";
    public estado: string = "";
    public ocupantes: number = 0;
    public banos: number = 0;

    constructor(numero:number, categoria:string, estado:string, ocupantes:number, banos:number){
        this.numero = numero;
        this.categoria=categoria;
        this.estado=estado;
        this.ocupantes = ocupantes;
        this.banos = banos;
    }

}
