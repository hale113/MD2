import {Role} from "./enum"
export class Staff {
    ID: number;
    name: string;
    dateOfBirth: string;
    address: string;
    role: Role;

    constructor(ID: number,
                name: string,
                dateOfBirth: string,
                address: string,
                role: Role) {
        this.ID = ID;
        this.name = name;
        this.dateOfBirth= dateOfBirth;
        this.address = address;
        this.role = Role;
    }

}
