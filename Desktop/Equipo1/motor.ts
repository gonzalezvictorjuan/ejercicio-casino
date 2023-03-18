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
     
    constructor (id:string, description: string, fechaFabricacion:Date, fechaInstalacion:Date, potenciaHp: number, eficiencia: Eficiencia, fabricante: string ){

        super(id, description,fechaFabricacion, fechaInstalacion) 
           this.potenciaHp = potenciaHp;
           this.eficiencia = eficiencia;
           this.fabricante = fabricante     
          }
          agregar_Motor(motor: Motor, array: Motor[]){ 
            if (array.push (motor)){
                console.log('Se ha añadido el motor a la base de datos');
                 }
                else {
                console.log('El motor no se ha podido añadir');        
                 }
                }
          
          leer_Motor(id:string, array: Motor[]){
            console.log(id, array); 
            }
           
          eliminar_Motor(id : string, array:Motor[]) {
            const motorAEliminar = array.findIndex (motor=> motor.id==id);
            if (motorAEliminar >=0){
               array.splice(motorAEliminar, 1);      
               console.log("Se eliminará: " , id);                  
            }else{
                console.log("no se encontró el motor para eliminar");     
            }           
        }
 }
          

         
          