enum ubicacion{
 "1°Piso",
 "2°Piso",
"3°Piso Salon VIP"
};

export class Casino {
    private ubicacion:ubicacion[];
    private apuestaMinima:boolean;


    constructor(ubicacion:number[], apuestaMinima:boolean) {
        this.ubicacion=ubicacion;
        this.apuestaMinima=apuestaMinima;        
    }
    getInfo() : Casino{
        return this;        
    }
}