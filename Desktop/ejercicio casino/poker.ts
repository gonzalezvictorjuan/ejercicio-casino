import { JuegoDeCasino } from "./JuegoDeCasino";
import { Casino } from "./Casino";
export class Poker extends JuegoDeCasino {
        private aceptaEfectivo:boolean;
        private casino:Casino
        
        constructor (nombre:string, categoria:string, cantMaxJugadores:number, casino: Casino ){
            super(nombre,categoria,cantMaxJugadores)
            this.aceptaEfectivo=true;
            this.casino=casino;
        }
        public jugarPoker (juegoParticipante:number, juegoCroupier:number, resultadoGanador:boolean ){
             if(juegoParticipante>juegoCroupier){
                resultadoGanador===true;
                console.log("Crack ganaste! estás de suerte");
                }else{
                    console.log("Retirate antes de perder la dignidad");                    
                }              
            }
            
         public apostar(resultadoGanador:boolean, fichas:number){
        if(resultadoGanador === true){
            let premio:number = fichas*36;
            console.log("ud ganó",premio, "fichas");
        }else{
            console.log("ud perdió todo");           
        }
 }
        getInfoPoker(poker:Poker): Poker {
            return this            
        }

}