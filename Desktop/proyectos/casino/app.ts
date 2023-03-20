import { JuegoDeCasino } from "./JuegoDeCasino";
import { Ruleta } from "./Ruleta";
import { Poker } from "./Poker";
import { Casino } from "./Casino";

const juego1 = new JuegoDeCasino("poker","Apuestas Mayores",6);
const casino1Piso = new Casino([0], false);
const casino2Piso = new Casino([1], false);
const casino3Piso = new Casino([2], true);
const rul1 = new Ruleta("Ruleta","Apuestas menores",10,true, casino1Piso);
const pokerDeLasEstrellas = new Poker("FamousGame", "Apuestas Mayores",6, casino3Piso);


pokerDeLasEstrellas.getInfoPoker;
pokerDeLasEstrellas.jugarPoker(100,50,true);
pokerDeLasEstrellas.apostar(true, 100);
