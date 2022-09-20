"use strict";
exports.__esModule = true;
var neighborhood_1 = require("../model/neighborhood");
var household_1 = require("../model/household");
var person_1 = require("../model/person");
var input = require('readline-sync');
function mainMenu() {
    var menu;
}
function addNeighborhood() {
    var id = +input.question("id");
    var name = input.question("ten khu pho");
    var neighborhood = new neighborhood_1.Neighborhood(id, name);
    console.log(this._neighborhoodManagement.push(addHousehold()).show());
}
function addHousehold() {
    var id = +input.question("so nha");
    var address = input.question("address");
    var household = new household_1.Household(id, address);
    console.log(this._household.push(addPerson()).show());
}
function addPerson() {
    var id = +input.question("cccd: ");
    var name = input.question("ho va ten: ");
    var age = +input.question("tuoi: ");
    var job = input.question("nghe nghiep: ");
    var person = new person_1.Person(id, name, age, job);
}
console.log(addNeighborhood());
