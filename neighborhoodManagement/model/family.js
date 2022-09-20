"use strict";
exports.__esModule = true;
exports.Household = void 0;
var Family = /** @class */ (function () {
    function Household(id, address) {
        this._household = [];
        this._id = id;
        this._address = address;
    }
    Object.defineProperty(Household.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Household.prototype, "member", {
        get: function () {
            return this._member;
        },
        set: function (value) {
            this._member = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Household.prototype, "household", {
        get: function () {
            return this._household;
        },
        set: function (value) {
            this._household = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Household.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Household.prototype.add = function (t) {
        this._household.push(t);
    };
    Household.prototype.findByMember = function (member) {
        for (var j = 0; j < this._household.length; j++) {
            if (this._household.length > 5) {
                return this.household;
            }
        }
    };
    Household.prototype.show = function () {
        console.log(this._household);
    };
    return Household;
}());
exports.Household = Family;
