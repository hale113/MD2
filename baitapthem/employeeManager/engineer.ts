import {Cadres} from "./cadres";

class Engineer extends Cadres{
    private trainingIndustry: string;
    constructor(id:number,name: string, age: number, gender: string, address: string,trainingIndustry:string) {
        super(id,name, age, gender, address);
        this.trainingIndustry =trainingIndustry;
    }
}