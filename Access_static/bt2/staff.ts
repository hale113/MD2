import {Role} from "./enum"

export class Staff {
    id: number;
    name: string;
    dateOfBirth: string;
    address: string;
    role: Role;

    constructor(id: number, name: string, dateOfBirth: string, address: string, role: Role) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.role = role;
    }
}
