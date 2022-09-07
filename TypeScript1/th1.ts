class Staff {
    public name: string;
    public email: string;
    public age: number;

    constructor(name: string,
                email: string,
                age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName(): string{
        return this.name;
    }
    setName(name: string):void{
        this.name =name;
    }
    getEmail():string{
        return this.email;
    }
    setEmail(email: string){
        this.email =email;
    }
    getAge():number{
        return this.age;
    }
    setAge(age: number){
        this.age = age;
    }
}
let staff = new Staff('Staff 1','staff@gmail.com',20);
let nameStaff = staff.getName();
console.log(nameStaff);
staff.setName('Staff 2');
let currentNameStaff = staff.getName();
console.log(currentNameStaff);
let ageStaff = staff.getAge();
console.log(ageStaff);
staff.setAge(50);
let abc = staff.getAge()
console.log(abc);