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
     private cilindros: number;
     private tipoCombustible:Combustible;
   
    constructor (id:string, description: string, fechaFabricacion:Date, fechaInstalacion:Date, potenciaHp: number, eficiencia: Eficiencia, fabricante: string,
         cilindros: number, tipoCombustible: Combustible){

        super(id, description, fechaFabricacion, fechaInstalacion, potenciaHp, 
            eficiencia, fabricante )

           this.cilindros = cilindros,
           this.tipoCombustible = tipoCombustible;           
          }
          agregar_M_Combustible( m_Combustible: M_Combustible , array: M_Combustible[]){ 
            if (array.push(m_Combustible)){
                console.log('Se ha añadido el producto a la base de datos');
                 }
                else {
                console.log('El producto no se ha podido añadir');        
                 }
                }
          
          leer_M_Combustible (id:string, array: M_Combustible[]){
            console.log(id, array); 
            }
           
          eliminar_M_Combustible (id : string, array:M_Combustible []) {
            const equipoAEliminar = array.findIndex (bomba=> bomba.id==id);
            if (equipoAEliminar >=0){
               array.splice(equipoAEliminar, 1);      
               console.log("Se eliminará: " , id);                  
            }else{
                console.log("no se encontró el producto para eliminar");     
            }           
        }
    }
        
        