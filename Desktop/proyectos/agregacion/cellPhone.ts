import { SimCard } from "./SimCard";
import { Battery } from "./Battery"

export class CellPhone{
    private make:string;
    private model: string;
    private simCard:SimCard[];
    private battery: Battery;

constructor (make:string, model:string, battery: Battery){
this.make = make;
this.model = model;
this.simCard = [];
this.battery = battery;
};

public getInfo (Cellphone){
    return this;
}
public setSimcard(SIM: SimCard){
    this.simCard.push(SIM);
}}