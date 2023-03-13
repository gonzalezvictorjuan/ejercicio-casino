import{ Motor} from "./Motor";

enum Eficiencia{
    A,
    B, 
    C, 
    D, 
    E, 
    F
}
 enum Combustible{
    nafta,
    gasoil, 
    gas, 
     
}

export class M_Combustible extends Motor{
     cilindros: number;
     tipoCombustible:Combustible;
   
    constructor (id:string, description: string, fechaFabricacion: number, 
        fechaInstalacion: number, potenciaHp: number, eficiencia: Eficiencia, fabricante: string,
         cilindros: number, tipoCombustible: Combustible ){

        super(id, description, fechaFabricacion, fechaInstalacion, potenciaHp, 
            eficiencia, fabricante )

           this.cilindros = cilindros,
           this.tipoCombustible = tipoCombustible;           
          }
        }
        