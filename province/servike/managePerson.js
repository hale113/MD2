"use strict";
exports.__esModule = true;
exports.ManagePerson = void 0;
var person_1 = require("../model/person");
var province_1 = require("../model/province");
var ManagePerson = /** @class */ (function () {
    function ManagePerson() {
        this.personList = [];
    }
    ManagePerson.prototype.add = function (t) {
        this.personList.push(t);
    };
    ManagePerson.prototype.finAll = function () {
        for (var i = 0; i < this.personList.length; i++) {
            console.log("stt" + (i + 1) + "," + this.personList[i].name + "," + this.personList[i].age + "ở" + this.personList[i].province.name);
        }
    };
    ManagePerson.prototype.findById = function (id) {
        return new person_1.Person(0, "0", 0, new province_1.Province(0, ""));
    };
    ManagePerson.prototype.findByIndex = function (index) {
        return new person_1.Person(0, "0", 0, new province_1.Province(0, ""));
    };
    return ManagePerson;
}());
exports.ManagePerson = ManagePerson;
