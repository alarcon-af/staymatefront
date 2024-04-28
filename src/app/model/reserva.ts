export class Reserva {
    public referencia: number = 0;
    public huesped: number = 0;
    public nombre_huesped: string = "";
    public categoria: string = "";
    public nombre_cat: number = 0;
    public check_in: Date = new Date("1900-01-01");
    public check_out: Date = new Date("1900-01-02");
    public tag: string = "";
    public valor: number = 0;
    public ocupantes: number = 0;

    constructor(referencia:number, huesped:number, nombre_huesped:string, categoria:string, nombre_cat:number, check_in:Date, check_out:Date, tag:string, valor:number, ocupantes:number){
        this.referencia = referencia;
        this.huesped = huesped;
        this.nombre_huesped = nombre_huesped;
        this.categoria = categoria;
        this.nombre_cat = nombre_cat;
        this.check_in = check_in;
        this.check_out = check_out;
        this.tag = tag;
        this.valor = valor;
        this.ocupantes = ocupantes;
    }
}
