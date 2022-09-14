"use strict";
exports.__esModule = true;
exports.Cadres = void 0;
var Cadres = /** @class */ (function () {
    function Cadres(id, name, age, gender, address) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._address = address;
    }
    Object.defineProperty(Cadres.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cadres.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cadres.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cadres.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cadres.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    return Cadres;
}());
exports.Cadres = Cadres;
