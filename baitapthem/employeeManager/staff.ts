import {Cadres} from "./cadres";

class Staff extends Cadres{
    private work: string;
    constructor(id: number,name: string, age: number, gender: string, address: string,work: string) {
        super(id,name, age, gender, address);
        this.work = work;
    }
}