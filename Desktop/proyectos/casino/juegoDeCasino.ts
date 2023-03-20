export class JuegoDeCasino {
    private nombre:string;
    private categoria:string;
    private cantMaxJugadores:number;

    constructor(nombre:string, categoria:string, cantMaxJugadores:number){
        this.nombre=nombre,
        this.categoria=categoria,
        this.cantMaxJugadores=cantMaxJugadores      
    }
    getInfo(): JuegoDeCasino{
           return this   
    }
}