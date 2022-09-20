import {Product} from "./product";
import {Customer} from "./customer";

export class OrderDetail {
    private _id:number;
    private _customer: Customer;
    private _cart: Product[]=[];
    private _time:string;


    constructor(id: number, customer: Customer, time: string) {
        this._id = id;
        this._customer = customer;
        this._time = time;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get customer(): Customer {
        return this._customer;
    }

    set customer(value: Customer) {
        this._customer = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }
    add(product: Product){
        this._cart.push(product);
    }
    showAll(){
        return this._cart;
    }
    showCart(){
        let str =``;
        this._cart.forEach((item)=>{
            str += `${item.name},sl: ${item.quality}`
        })
        return str
    }
}