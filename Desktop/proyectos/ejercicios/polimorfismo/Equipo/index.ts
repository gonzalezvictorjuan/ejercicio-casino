import { Equipo } from "./equipo";
import { Bomba  } from "./Bomba";
import { Motor } from "./Motor";
import { KitMangueras } from "./KitMangueras";
import { M_Combustible } from "./M_Combustible";
import { M_Electrico } from "./M_Electrico";
import { constants } from "buffer";

const equipoDeportivo = new Equipo("D001","producto0", 2020, 2020);
const equipoUrbano = new Equipo ("U001", "producto1", 2019, 2019);
console.log(equipoDeportivo);

const bombaEqDeportivo  = new Bomba("BD001","bomba eq deportivo",2018, 2018, 150, 150, "Honda");
const bombaEqUrbano = new Bomba("BU001", "bomba eq urbano", 2016, 2016, 100, 100, "Ford");
console.log(bombaEqDeportivo);

const motorEqDeportivo = new Motor ("MD001", "Motor equipo deportivo", 2022, 2022, 300, 0, "Ferrari");
const motorEqUrban0 = new Motor("MU001", "motor equipo urbano",2020, 2020, 120, 3, "Chevrolet");
const Ivetec = new Motor( "M1408", "motor japones", 2022, 2022, 140, 5, "Honda");          
console.log(Ivetec);
console.log(motorEqDeportivo);

const combustibleEqDeportivo = new M_Combustible("MC001", "tipo de motor eq depotivo",2022, 2022, 300,
 0, "Buggatti", 16, 0)
 const combustibleUrbano = new M_Combustible("MC001", "tipo de motor eq urbano", 2018, 2018, 120, 3, "Toyota", 
 4, 1);
 console.log(combustibleEqDeportivo);

const M_ElectricoDeportivo = new M_Electrico("ME001", "motor eléctrico deportivo", 2021, 2021, 200, 0,
"Tesla", "170kWv", 25/100, true ); 
const M_ElectricoUrbano = new M_Electrico("MU001", "motor eléctrico urbano", 2022, 2022, 120, 0,
"Honda", "80kWv", 15/100, true );
console.log(M_ElectricoDeportivo);
 

 