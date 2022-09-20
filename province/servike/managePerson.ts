import {Manager} from "./manager";
import {Person} from "../model/person";
import {Province} from "../model/province";

export class ManagePerson implements Manager<Person>{
     personList:Person[] = [];
    add(t: Person):void {
        this.personList.push(t);
    }
    finAll():void {
        for (let i = 0; i < this.personList.length; i++) {
            console.log("stt"+ (i+1)+ "," + this.personList[i].name+","+ this.personList[i].age+ "ở" + this.personList[i].province.name);
        }
    }
    findById(id: number): Person {
        return new Person(0,"0",0,new Province(0,""));
    }
    findByIndex(index: number): Person {
        return new Person(0,"0",0, new Province(0,""))
    }

}