
import {Product} from "../model/product";
import {Manage} from "./manage";

export class ProductManagement implements Manage<Product>{
    listProduct: Product[]=[]
    add(t: Product){
       this.listProduct.push(t);
    }

    findAll() {
      return  this.listProduct
    }
    findById(id: number): number {
        for (let i = 0; i < this.listProduct.length; i++) {
            if(id == this.listProduct[i].id){
                return i;
            }
        }
        return -1;
    }

    remove(id: number): void {
        let index = this.findById(id);
        this.listProduct.splice(index,1);
    }

    update(id: number, t: Product): void {
        let index = this.findById(id);
        this.listProduct[index] = t;
    }


    findProductById(id: number): Product{
        let index = this.findById(id);
        return this.listProduct[index];
    }

}