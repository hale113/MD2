"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.add = function (staff) {
        this.list.push(staff);
    };
    EmployeeManager.Show = function () {
        console.log(this.list);
    };
    EmployeeManager["delete"] = function (id) {
        var index = this.find(id);
        this.list.splice(index, 1);
    };
    EmployeeManager.find = function (id) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].id == id) {
                return;
            }
        }
        return -1;
    };
    EmployeeManager.deleteByFilter = function (id) {
        this.list = this.list.filter(function (item) {
            return item.id != id;
        });
    };
    EmployeeManager.list = [];
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
