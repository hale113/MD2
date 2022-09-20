import {Manage} from "./manage";
import {Customer} from "../model/customer";
import {Product} from "../model/product";

export class CustomerManagement implements Manage<Customer>{
    listCustomer: Customer[]=[];

    add(t: Customer): void {
        this.listCustomer.push(t)
    }
    show(): void {
        console.log("----Danh sach khach hang----")
        for (let i = 0; i < this.listCustomer.length; i++) {
            console.log((i+1)+ ".MKH: " + this.listCustomer[i].id + "_   " + this.listCustomer[i].name +"sp da mua" )
        }
        console.log("------------")
    }

    findAll() {
        return this.listCustomer;
    }
    findById(id: number):number{
        for (let i = 0; i < this.listCustomer.length; i++) {
            if (this.listCustomer[i].id == id){
                return i;
            }
        }
        return -1;
    }

    remove(id: number):void {
        let index = this.findById(id);
        this.listCustomer.splice(index,1);
    }

    update(id: number, t: Customer) {
    }


    findCustomerById(id:number): Customer{
        let index = this.findById(id);
        return this.listCustomer[index];
    }

}