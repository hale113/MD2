import {Person} from "./person";

export class Family {
    private _id: number;
    private _member: number;
    private _address: string;
    private _household: Person[] = [];


    constructor(id: number, address: string) {
        this._id = id;
        this._address = address;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get member(): number {
        return this._member;
    }

    set member(value: number) {
        this._member = value;
    }

    get household(): Person[] {
        return this._household;
    }

    set household(value: Person[]) {
        this._household = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    add(t: Person) {
        this._household.push(t)
    }

    findByMember(member: number) {
        for (let j = 0; j < this._household.length; j++) {
            if(this._household.length>5){
                return this.household
            }
        }

    }

    show() {
        console.log(this._household);
    }

}