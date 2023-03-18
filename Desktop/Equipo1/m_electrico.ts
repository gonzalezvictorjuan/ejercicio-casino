import { Motor} from "./Motor"

enum Eficiencia{
    A,
    B, 
    C, 
    D, 
    E, 
    F
}
 
export class M_Electrico extends Motor{
    private voltaje: string;
    private consumoKwH: number;
    private isBajoConsumo: boolean
   
    constructor (id:string, description: string, fechaFabricacion:Date, fechaInstalacion:Date, potenciaHp: number, eficiencia: Eficiencia, 
        fabricante: string, voltaje: string, 
        consumoKwH: number, isBajoConsumo: true){

        super(id, description, fechaFabricacion, fechaInstalacion, potenciaHp, 
            eficiencia, fabricante )

           this.voltaje = voltaje,
           this.consumoKwH = consumoKwH;  
           this.isBajoConsumo =  isBajoConsumo        
          }
          agregar_M_Electrico( m_Electrico: M_Electrico , array: M_Electrico[]){ 
            if (array.push(m_Electrico)){
                console.log('Se ha añadido el producto a la base de datos');
                 }
                else {
                console.log('El producto no se ha podido añadir');        
                 }
                }
          
          leer_M_Electrico (id:string, array: M_Electrico[]){
            console.log(id, array); 
            }
           
          eliminar_M_Electrico (id : string, array:M_Electrico []) {
            const equipoAEliminar = array.findIndex (bomba=> bomba.id==id);
            if (equipoAEliminar >=0){
               array.splice(equipoAEliminar, 1);      
               console.log("Se eliminará: " , id);                  
            }else{
                console.log("no se encontró el producto para eliminar");     
            }           
        }
        }
      