import {Street} from "../model/street";
import {Family} from "../model/family";
import {Person} from "../model/person";

let input = require('readline-sync');
function mainMenu(){

}
mainMenu();
function addNeighborhood(){
    let id = + input.question("id");
    let name = input.question("ten khu pho");
    let neighborhood:Street = new Street(id,name);
    console.log(this._neighborhoodManagement.push(addHousehold()));

}

function addHousehold(){
    let id = +input.question("so nha");
    let address = input.question("address");
    let household: Family = new Family(id,address);
    console.log(this._household.push(addPerson()));
}

function addPerson(){
    let id = +input.question("cccd: ");
    let name = input.question("ho va ten: ");
    let age = +input.question("tuoi: ");
    let job = input.question("nghe nghiep: ");
    let person: Person = new Person(id,name,age,job);

}

console.log(addNeighborhood())
