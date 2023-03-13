export class Equipo{
    id:string;
    description:string;
    protected fechaFabricacion: number;
    protected fechaInstalacion: number;

    constructor (id:string, description: string, fechaFabricacion: number, fechaInstalacion: number ){
      this.id = id;
      this.description = description;
      this.fechaFabricacion = fechaFabricacion;
      this.fechaInstalacion = fechaInstalacion
    }
}
function agregar_Equipo(equipo: Equipo, array: Equipo[]) {
    if(array.push(equipo)){
        console.log('Se ha añadido ', equipo, ' a la base de datos', array);
    } else{
        console.log('El Equipo', equipo, ' No se ha podido añadir');     
    }

function leer_Equipo() {
    
}
function eliminar_Equipo() {
    
}
function editar_Equipo() {
    
}}
