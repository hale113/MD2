"use strict";
exports.__esModule = true;
exports.Neighborhood = void 0;
var Street = /** @class */ (function () {
    function Neighborhood(id, name) {
        this._neighborhoodManagement = [];
        this._id = id;
        this._name = name;
    }
    Object.defineProperty(Neighborhood.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Neighborhood.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Neighborhood.prototype, "neighborhoodManagement", {
        get: function () {
            return this._neighborhoodManagement;
        },
        set: function (value) {
            this._neighborhoodManagement = value;
        },
        enumerable: false,
        configurable: true
    });
    Neighborhood.prototype.add = function (neighborhoodManagement) {
        this._neighborhoodManagement.push(neighborhoodManagement);
    };
    Neighborhood.prototype.show = function () {
        console.log(this._neighborhoodManagement);
    };
    return Neighborhood;
}());
exports.Neighborhood = Street;
