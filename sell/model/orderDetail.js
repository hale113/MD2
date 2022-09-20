"use strict";
exports.__esModule = true;
exports.OrderDetail = void 0;
var OrderDetail = /** @class */ (function () {
    function OrderDetail(id, customer, time) {
        this._cart = [];
        this._id = id;
        this._customer = customer;
        this._time = time;
    }
    Object.defineProperty(OrderDetail.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetail.prototype, "customer", {
        get: function () {
            return this._customer;
        },
        set: function (value) {
            this._customer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetail.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
        },
        enumerable: false,
        configurable: true
    });
    OrderDetail.prototype.add = function (product) {
        this._cart.push(product);
    };
    OrderDetail.prototype.showAll = function () {
        return this._cart;
    };
    OrderDetail.prototype.showCart = function () {
        var str = "";
        this._cart.forEach(function (item) {
            str += "".concat(item.name, ",sl: ").concat(item.quality);
        });
        return str;
    };
    return OrderDetail;
}());
exports.OrderDetail = OrderDetail;
