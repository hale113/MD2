"use strict";
exports.__esModule = true;
var managePerson_1 = require("../servike/managePerson");
var manageProvince_1 = require("../servike/manageProvince");
var person_1 = require("../model/person");
var Main = /** @class */ (function () {
    function Main() {
        this.input = require('readline-sync');
        this.managePerson = new managePerson_1.ManagePerson();
        this.manageProvince = new manageProvince_1.ManageProvince();
    }
    Main.prototype.menu = function () {
        var menu = "\n      -----------\n      1. them  nguoi\n      2.hien thi\n      -----------\n      ";
        var choice;
        do {
            console.log(menu);
            choice = +this.input.question('nhap lua chon');
            switch (choice) {
                case 1:
                    var id = +this.input.question("nhap id: ");
                    var name_1 = +this.input.question("nhap ten: ");
                    var age = +this.input.question("nhap tuoi: ");
                    this.manageProvince.finAll();
                    var indexOfProvince = +this.input.question("Nhap vao stt tinh: ");
                    this.managePerson.add(new person_1.Person(id, "name", age, this.manageProvince.findByIndex(indexOfProvince - 1)));
                    break;
                case 2:
                    this.managePerson.finAll();
                    break;
            }
        } while (choice != 0);
    };
    return Main;
}());
var main = new Main();
main.menu();
