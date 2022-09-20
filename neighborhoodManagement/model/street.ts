import {Family} from "./family";
 export class Street {
     private _id: number;
     private _name: string;
     private _neighborhoodManagement: Family[] = [];


     constructor(id: number, name: string) {
         this._id = id;
         this._name = name;
     }

     get id(): number {
         return this._id;
     }

     set id(value: number) {
         this._id = value;
     }

     get name(): string {
         return this._name;
     }

     set name(value: string) {
         this._name = value;
     }

     get neighborhoodManagement(): Family[] {
         return this._neighborhoodManagement;
     }

     set neighborhoodManagement(value: Family[]) {
         this._neighborhoodManagement = value;

     }

     add(neighborhoodManagement: Family){
         this._neighborhoodManagement.push(neighborhoodManagement);
     }
     show(): void{
         console.log(this._neighborhoodManagement);
     }

 }