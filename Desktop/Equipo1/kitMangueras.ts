import {Equipo  } from "./Equipo";

enum roscaMaterial{
    metal, goma
}

export class KitMangueras extends Equipo{
     private elementos: number;
     private medidasPulgadas: number;
     private roscasMaterial: roscaMaterial;

    constructor (id:string, description: string, fechaFabricacion, fechaInstalacion, 
        elementos: number, medidasPulgadas: number, roscaMaterial: roscaMaterial ){

        super(id, description,fechaFabricacion, fechaInstalacion );
           this.elementos = elementos;
           this.medidasPulgadas = medidasPulgadas;
           this.roscasMaterial = roscaMaterial
        }
          agregar_KitMangueras( kitMangueras: KitMangueras , array: KitMangueras[]){ 
            if (array.push(kitMangueras)){
                console.log('Se ha añadido el kit de mangueras a la base de datos');
                 }
                else {
                console.log('El kit de mangueras no se ha podido añadir');        
                 }                                 
                }
          
          leer_KitMangueras(id:string, array: KitMangueras[]){
            console.log(id, array); 
            }
           
          eliminar_KitMangueras(id : string, array:KitMangueras[]) {
            const equipoAEliminar = array.findIndex (bomba=> bomba.id==id);
            if (equipoAEliminar >=0){
               array.splice(equipoAEliminar, 1);      
               console.log("Se eliminará: " , id);                  
            }else{
                console.log("no se encontró la bomba para eliminar");     
            }           
        }
    }