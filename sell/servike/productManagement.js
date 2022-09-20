"use strict";
exports.__esModule = true;
exports.ProductManagement = void 0;
var ProductManagement = /** @class */ (function () {
    function ProductManagement() {
        this.listProduct = [];
    }
    ProductManagement.prototype.add = function (t) {
        this.listProduct.push(t);
    };
    ProductManagement.prototype.findAll = function () {
        return this.listProduct;
    };
    ProductManagement.prototype.findById = function (id) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (id == this.listProduct[i].id) {
                return i;
            }
        }
        return -1;
    };
    ProductManagement.prototype.remove = function (id) {
        var index = this.findById(id);
        this.listProduct.splice(index, 1);
    };
    ProductManagement.prototype.update = function (id, t) {
        var index = this.findById(id);
        this.listProduct[index] = t;
    };
    ProductManagement.prototype.findProductById = function (id) {
        var index = this.findById(id);
        return this.listProduct[index];
    };
    return ProductManagement;
}());
exports.ProductManagement = ProductManagement;
