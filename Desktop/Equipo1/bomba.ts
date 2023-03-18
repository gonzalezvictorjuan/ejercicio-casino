import {Equipo} from "./Equipo";

export class Bomba extends Equipo{
     private caudalEntrada: number;
     private caudalSalida: number;
     private fabricante: string;

    constructor (id:string, description: string, fechaFabricacion:Date, fechaInstalacion:Date, 
        caudalEntrada: number, caudalSalida: number, fabricante: string ){

        super(id, description,fechaFabricacion, fechaInstalacion, )
           this.caudalEntrada = caudalEntrada;
           this.caudalSalida = caudalSalida;
           this.fabricante = fabricante     
          }

          agregar_Bomba(bomba: Bomba, array: Bomba[]){ 
            if (array.push (bomba)){
                console.log('Se ha añadido la bomba a la base de datos');
                 }
                else {
                console.log('La bomba no se ha podido añadir');        
                 }
                }
          
          leer_Bomba(id:string, array: Bomba[]){
            console.log(id, array); 
            }
           
          eliminar_Bomba(id : string, array:Bomba[]) {
            const equipoAEliminar = array.findIndex (bomba=> bomba.id==id);
            if (equipoAEliminar >=0){
               array.splice(equipoAEliminar, 1);      
               console.log("Se eliminará: " , id);                  
            }else{
                console.log("no se encontró la bomba para eliminar");     
            }           
        }
      }