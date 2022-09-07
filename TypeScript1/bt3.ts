enum Gender {
    MALE,
    FEMALE,
    OTHER
}

class Employee {
    private _name: string = "";
    private _gender: Gender = Gender.OTHER;
    private _birthday?: Date;
    private _email: string = "";
    private _phoneNumber: string = "";

    constructor(name: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {
        this._name = name;
        this._gender = gender;
        this._birthday = birthday;
        this._email = email;
        this._name = name;
        this._phoneNumber = phoneNumber;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this._gender = value;
    }

    get birthday(): Date {
        return this._birthday;
    }

    set birthday(value: Date) {
        this._birthday = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }
}

class EmployeeList {
    obj: object[] = []

    add(a: object) {
        this.obj.push(a)
    }
    show(){
        return this.obj
    }
    delete(b:number){
        this.obj.splice(b,1)
    }
}

let employee1:Employee = new Employee("Le Anh Van", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789");
let employee2:Employee = new Employee("Mai Anh Dao", Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790");
let employee3:Employee = new Employee("Mai Em Dao", Gender.FEMALE, new Date("1997-01-12"), "btrasadsads@gmail.com", "012435466790");

let employeeList:EmployeeList = new EmployeeList();
employeeList.add(employee1);
employeeList.add(employee2)
employeeList.add(employee3)
employeeList.delete(0)
console.log(employeeList.show());





