import {  Motor} from "./Motor"
enum Eficiencia{
    A,
    B, 
    C, 
    D, 
    E, 
    F
}
 enum Combustible{
    electricidad
}

export class M_Electrico extends Motor{
     voltaje: string;
     consumoKwH: number;
     isBajoConsumo: boolean
   
    constructor (id:string, description: string, fechaFabricacion: number, 
        fechaInstalacion: number, potenciaHp: number, eficiencia: Eficiencia, 
        fabricante: string, cilindros: number, tipoCombustible: Combustible, voltaje: string, 
        consumoKwH: number, isBajoConsumo: true){

        super(id, description, fechaFabricacion, fechaInstalacion, potenciaHp, 
            eficiencia, Combustible, fabricante )

           this.voltaje = voltaje,
           this.consumoKwH = consumoKwH;  
           this.isBajoConsumo =  isBajoConsumo        
          }
        }
      