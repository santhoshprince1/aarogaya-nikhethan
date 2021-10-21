import { Address } from "./address";
import { Facilites } from "./facilites";

export interface Hospital{
    id?:number;
    hospitalname:string;
    password:string;
    address:Address;
    faclites:Facilites;
}