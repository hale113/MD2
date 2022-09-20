import {Manage} from "./manage";
import {Product} from "../model/product";
import {OrderDetail} from "../model/orderDetail";
export class OrderDetailManagement implements Manage<OrderDetail> {
    listOrderDetail: OrderDetail[] = [];

    add(t: OrderDetail): void {
        this.listOrderDetail.push(t)
    }

    findAll() {
        for (let i = 0; i < this.listOrderDetail.length; i++) {
            console.log(`${this.listOrderDetail[i].customer.name},${this.listOrderDetail[i].showCart()}, thoi gian${this.listOrderDetail[i].time}`);
        }
    }

    findById(id: number) {
        this.listOrderDetail.forEach((item,index)=>{
            if (item.id == id){
                return index;
            }
        })
        return -1;
    }

    remove(id: number) {
        let index = this.findById(id);
        this.listOrderDetail.splice(index,1);
    }


    update(id: number, t: OrderDetail) {
        let index = this.findById(id);
        this.listOrderDetail[index] = t;
    }

}