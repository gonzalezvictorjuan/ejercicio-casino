import {Equipo} from "./Equipo";

export class Bomba extends Equipo{
     caudalEntrada: number;
     caudalSalida: number;
     fabricante: string;

    constructor (id:string, description: string, fechaFabricacion: number, fechaInstalacion: number, 
        caudalEntrada: number, caudalSalida: number, fabricante: string ){

        super(id, description,fechaFabricacion, fechaInstalacion, )
           this.caudalEntrada = caudalEntrada;
           this.caudalSalida = caudalSalida;
           this.fabricante = fabricante     
          }
function agregar_Bomba() {
   return 
}

function leer_Bomba() {
    
}
function eliminar_Bomba() {
    
}
function editar_Bomba() {
    
}}
