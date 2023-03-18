import { Equipo } from "./equipo";
import { Bomba  } from "./bomba";
import { Motor } from "./motor";
import { KitMangueras } from "./kitMangueras";
import { M_Combustible } from "./m_Combustible";
import { M_Electrico } from "./m_Electrico";

// import { constants } from "buffer";

let fechaFabricacion = new Date (2020,1,1);
let fechaInstalacion = new Date (2021,1,1);

const equipoDeportivo = new Equipo("ED001","equipo deportivo", fechaFabricacion, fechaInstalacion ); 
const equipoUrbano = new Equipo ("U001", "producto1",fechaFabricacion, fechaInstalacion);
const listadoEquipos : Equipo[] = new Array (equipoDeportivo, equipoUrbano);

const bombaEqDeportivo  = new Bomba("BD001","bomba eq deportivo",fechaFabricacion, fechaInstalacion, 150, 150, "Honda");
const bombaEqUrbano = new Bomba("BU001", "bomba eq urbano", fechaFabricacion,fechaInstalacion, 100, 100, "Ford");
const listadoBombas : Bomba[] = new Array (bombaEqDeportivo, bombaEqUrbano );

const motorEqDeportivo = new Motor ("MD001", "Motor equipo deportivo",fechaFabricacion, fechaInstalacion, 300, 0, "Ferrari");
const motorEqUrbano = new Motor("MU001", "motor equipo urbano",fechaFabricacion,fechaInstalacion, 120, 3, "Chevrolet");
const Ivetec = new Motor( "M1408", "motor japones", fechaFabricacion, fechaInstalacion, 140, 5, "Honda");   
const listadoMotores : Motor[] = new Array (motorEqDeportivo, motorEqUrbano, Ivetec );
      
const combustibleEqDeportivo = new M_Combustible("MC001", "tipo de motor eq depotivo",fechaFabricacion, fechaInstalacion, 300,
 0, "Buggatti", 16, 0)
 const combustibleUrbano = new M_Combustible("MC001", "tipo de motor eq urbano", fechaFabricacion, fechaInstalacion, 120, 3, "Toyota", 
 4, 1);
 const listadoCombustible : M_Combustible[] = new Array (combustibleEqDeportivo, combustibleUrbano );


const m_ElectricoDeportivo = new M_Electrico("ME001", "motor eléctrico deportivo", fechaFabricacion, fechaInstalacion, 200, 0,
"Tesla", "170kWv", 25/100, true ); 
const m_ElectricoUrbano = new M_Electrico("MU001", "motor eléctrico urbano", fechaFabricacion, fechaInstalacion, 120, 0,
"Honda", "80kWv", 15/100, true );
const listadoElectrico : M_Electrico[] = new Array (m_ElectricoDeportivo, m_ElectricoUrbano);


const kitManguerasDeportivo = new KitMangueras("KM001", "kit mangueras auto deportivo", fechaFabricacion, fechaInstalacion,
4, 2, 1);
const kitManguerasUrbano = new KitMangueras("KU001", "Kit mangueras auto urbano", fechaFabricacion, fechaInstalacion, 4, 1, 2);
const listadoMangueras :KitMangueras[] = new Array (kitManguerasDeportivo, kitManguerasUrbano)
// console.log(KitManguerasDeportivo);

// equipoDeportivo.agregar_Equipo('mdfkmdkf', listadoEquipos);

equipoDeportivo.eliminar_Equipo("U001", listadoEquipos);

kitManguerasUrbano.agregar_KitMangueras(kitManguerasUrbano, listadoMangueras);
console.log(listadoMangueras);
motorEqUrbano.eliminar_Motor("M1408", listadoMotores);

 