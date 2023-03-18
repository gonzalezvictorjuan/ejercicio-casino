export class Equipo{
    protected id:string;
    private description:string;
    private fechaFabricacion: Date 
    private fechaInstalacion: Date


    constructor (id:string, description: string, fechaFabricacion: Date, fechaInstalacion: Date ){
      this.id = id;
      this.description = description;
      this.fechaFabricacion = fechaFabricacion;
      this.fechaInstalacion = fechaInstalacion
    }

agregar_Equipo(equipo: Equipo, array: Equipo[]){ 
  if (array.push (equipo)){
      console.log('Se ha añadido el equipo a la base de datos');
       }
      else {
      console.log('El Equipo no se ha podido añadir');        
       }
      }

leer_Equipo(id:string, array: Equipo[]){
  console.log(id, array); 
  }
 
eliminar_Equipo(id : string, array:Equipo[]) {
  const equipoAEliminar = array.findIndex (equipo=> equipo.id==id);
  if (equipoAEliminar >=0){
     array.splice(equipoAEliminar, 1);      
     console.log("Se eliminará: " , id);
        
  }else{
      console.log("no se encontrò el equipo para eliminar");     
  }           
    }
      }
