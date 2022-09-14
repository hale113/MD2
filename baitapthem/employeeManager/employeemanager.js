"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.add = function (cadres) {
        this.list.push(cadres);
    };
    EmployeeManager.show = function () {
        console.log(this.list);
    };
    EmployeeManager.searchByName = function (name) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].name == name) {
                return this.list[i];
            }
        }
    };
    EmployeeManager.find = function (id) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    EmployeeManager.deleteById = function (id) {
        var index = this.find(id);
        this.list.splice(index, 1);
    };
    //xóa dung ham filter
    EmployeeManager.deleteByFilter = function (id) {
        this.list = this.list.filter(function (item) {
            return item.id != id;
        });
        console.log(this.deleteById(id));
    };
    EmployeeManager.edit = function (index, name) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].id == index) {
                this.list[i].name = name;
            }
        }
        console.log(this.list);
    };
    EmployeeManager.list = [];
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
