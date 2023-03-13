import {Equipo  } from "./Equipo";

enum Eficiencia{
    A,
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

          const Ivetec = new Motor( "M1408", "motor japones", 2022, 2022, 140, 5, "Honda")
          
          console.log(Ivetec);

         
          