"use strict";
exports.__esModule = true;
exports.ManageProvince = void 0;
var province_1 = require("../model/province");
var ManageProvince = /** @class */ (function () {
    function ManageProvince() {
        this._provinceList = [];
        this._provinceList.push(new province_1.Province(1, "Ha Noi"));
        this._provinceList.push(new province_1.Province(2, "Thanh Hoa"));
        this._provinceList.push(new province_1.Province(3, "Da Nang"));
        this._provinceList.push(new province_1.Province(4, "Ha Nam"));
        this._provinceList.push(new province_1.Province(5, "Thai Binh"));
    }
    ManageProvince.prototype.add = function (t) {
        this._provinceList.push(t);
    };
    ManageProvince.prototype.finAll = function () {
        for (var i = 0; i < this._provinceList.length; i++) {
            console.log("stt" + (i + 1) + "," + this._provinceList[i].name);
        }
    };
    ManageProvince.prototype.findById = function (id) {
        for (var i = 0; i < this._provinceList.length; i++) {
            if (this._provinceList[i].id == id) {
                return this._provinceList[i];
            }
        }
    };
    ManageProvince.prototype.findByIndex = function (index) {
        return this._provinceList[index];
    };
    return ManageProvince;
}());
exports.ManageProvince = ManageProvince;
