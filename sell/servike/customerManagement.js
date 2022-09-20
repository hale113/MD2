"use strict";
exports.__esModule = true;
exports.CustomerManagement = void 0;
var CustomerManagement = /** @class */ (function () {
    function CustomerManagement() {
        this.listCustomer = [];
    }
    CustomerManagement.prototype.add = function (t) {
        this.listCustomer.push(t);
    };
    CustomerManagement.prototype.show = function () {
        console.log("----Danh sach khach hang----");
        for (var i = 0; i < this.listCustomer.length; i++) {
            console.log((i + 1) + ".MKH: " + this.listCustomer[i].id + "_   " + this.listCustomer[i].name + "sp da mua");
        }
        console.log("------------");
    };
    CustomerManagement.prototype.findAll = function () {
        return this.listCustomer;
    };
    CustomerManagement.prototype.findById = function (id) {
        for (var i = 0; i < this.listCustomer.length; i++) {
            if (this.listCustomer[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    CustomerManagement.prototype.remove = function (id) {
        var index = this.findById(id);
        this.listCustomer.splice(index, 1);
    };
    CustomerManagement.prototype.update = function (id, t) {
    };
    CustomerManagement.prototype.findCustomerById = function (id) {
        var index = this.findById(id);
        return this.listCustomer[index];
    };
    return CustomerManagement;
}());
exports.CustomerManagement = CustomerManagement;
