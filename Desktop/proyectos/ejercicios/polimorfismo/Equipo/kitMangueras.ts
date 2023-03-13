import {Equipo  } from "./Equipo";

enum roscaMaterial{
    metal, goma
}

export class KitMangueras extends Equipo{
     elementos: number;
     medidasPulgadas: number;
     roscasMaterial: roscaMaterial;

    constructor (id:string, description: string, fechaFabricacion: number, fechaInstalacion: number, 
        elementos: number, medidasPulgadas: number, roscaMaterial: roscaMaterial ){

        super(id, description,fechaFabricacion, fechaInstalacion, )
           this.elementos = elementos;
           this.medidasPulgadas = medidasPulgadas;
           this.roscasMaterial = roscaMaterial
          }}