"use strict";
exports.__esModule = true;
exports.OrderDetailManagement = void 0;
var OrderDetailManagement = /** @class */ (function () {
    function OrderDetailManagement() {
        this.listOrderDetail = [];
    }
    OrderDetailManagement.prototype.add = function (t) {
        this.listOrderDetail.push(t);
    };
    OrderDetailManagement.prototype.findAll = function () {
        for (var i = 0; i < this.listOrderDetail.length; i++) {
            console.log("".concat(this.listOrderDetail[i].customer.name, ",").concat(this.listOrderDetail[i].showCart(), ", thoi gian").concat(this.listOrderDetail[i].time));
        }
    };
    OrderDetailManagement.prototype.findById = function (id) {
        this.listOrderDetail.forEach(function (item, index) {
            if (item.id == id) {
                return index;
            }
        });
        return -1;
    };
    OrderDetailManagement.prototype.remove = function (id) {
        var index = this.findById(id);
        this.listOrderDetail.splice(index, 1);
    };
    OrderDetailManagement.prototype.update = function (id, t) {
        var index = this.findById(id);
        this.listOrderDetail[index] = t;
    };
    return OrderDetailManagement;
}());
exports.OrderDetailManagement = OrderDetailManagement;
