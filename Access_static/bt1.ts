class User {
    protected _name: string;
    protected _email: string;
    public _role: number;
    constructor(_name: string,_email:string,_role: number) {
        this._name = _name;
        this._email = _name;
        this._role = _role;
    }

    set name(value: string) {
        this._name = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set role(value: number) {
        this._role = value;
    }

    getInfo(){
        return this;
    }
    isAdmin():string {
        if (this._role==1){
            return "là admin";
        }
        if (this._role==2){
            return "là người dùng bình thường";
        }else {
            return "";
        }
    }
}
let user = new User("Lan", "lanle@gmail.com",1);
console.log(user.getInfo());
user.name = "hoa";

