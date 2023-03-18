import {Equipo  } from "./Equipo";

enum Eficiencia{
    A=0,
    B, 
    C, 
    D, 
    E, 
    F
}
 export class Motor extends Equipo{
     potenciaHp: number;
     eficiencia: Eficiencia;
     fabricante: string;
     

    constructor (id:string, description: string, fechaFabricacion: number, 
        fechaInstalacion: number, potenciaHp: number, eficiencia: Eficiencia, fabricante: string ){

        super(id, description,fechaFabricacion, fechaInstalacion) 
           this.potenciaHp = potenciaHp;
           this.eficiencia = eficiencia;
           this.fabricante = fabricante     
          }}

          

         
          