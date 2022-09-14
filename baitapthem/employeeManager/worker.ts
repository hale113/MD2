import {Cadres} from "./cadres";

class Worker extends Cadres{
    private step: number;
    constructor(id:number,name : string, age: number, gender: string, address: string,step:number) {
        super(id,name, age, gender, address);
        this.step = step;
    }
}