import {Manager} from "./manager";
import {Province} from "../model/province";

export class ManageProvince implements Manager<Province>{
    private _provinceList:Province[] = [];
    constructor() {
        this._provinceList.push(new Province(1,"Ha Noi"));
        this._provinceList.push(new Province(2,"Thanh Hoa"));
        this._provinceList.push(new Province(3,"Da Nang"));
        this._provinceList.push(new Province(4,"Ha Nam"));
        this._provinceList.push(new Province(5,"Thai Binh"));
    }
    add(t:Province):void{
        this._provinceList.push(t);
    }
    finAll():void{
        for (let i = 0; i < this._provinceList.length; i++) {
            console.log("stt" + (i+1)+","+ this._provinceList[i].name)
        }
    }
    findById(id: number): Province {
        for (let i = 0; i < this._provinceList.length; i++) {
            if(this._provinceList[i].id==id){
                return this._provinceList[i];
            }
        }
    }
    findByIndex(index: number): Province {
        return this._provinceList[index];
    }
}
