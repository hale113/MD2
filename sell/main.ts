import {ProductManagement} from "./servike/productManagement";
import {CustomerManagement} from "./servike/customerManagement";
import {Product} from "./model/product";
import {OrderDetailManagement} from "./servike/orderDetailManagement";
import {Customer} from "./model/customer";
import {OrderDetail} from "./model/orderDetail";


let input  = require('readline-sync');
let listProduct: ProductManagement = new ProductManagement();
let listCustomer: CustomerManagement = new CustomerManagement();
let orderManage: OrderDetailManagement = new OrderDetailManagement();


function mainMenu() {
    let menu = `
    --------------==========-------------
    1. san pham
    2. khach hang
    3. mua san pham
    4. hoa don
    0.thoat
    ---------------===========-------------
    `
    let choice: number;
    do {
        console.log(menu);
        choice = +input.question("lua chon cua ban: ");
        switch (choice){
            case 1:
                showMenuProduct();
                break;
            case 2:
                addCustomer();
                break;
            case 3:
                buyProduct();
                break;
            case 4:
                showOrder()
                break;
            case 0:
                break;
        }
    }
    while (choice!=0)
}
 function addCustomer(){
    let id = +input.question("nhap id khach hang: ");
    let name = input.question("nhap ten khach hang: ");
    listCustomer.add(new Customer(id,name));
 }

function addProduct(){
    let id: number = +input.question("nhap id sp: ");
    let name: string = input.question("nham ten sp: ");
    let quality: number =+ input.question("nhap so luong: ")
    let product: Product = new Product(id,name,quality);
    listProduct.add(product);
}

function showMenuProduct(){
   let menu = `
   -------Menu Product--------
   1. them
   2. xoa 
   3. sua
   4. hien thi
   0. thoat
   `
    let choice
    do{
        console.log(menu);
        choice = +input.question("lua chon cua ban: ");
        switch (choice){
            case 1:
                addProduct();
                break;
            case 2:
                break;
            case 4:
                showListProduct();
                break;
        }
    }while (choice!= 0)
}

function showListProduct(){
    console.log(listProduct.findAll())
}

function buyProduct(){
    let id = +input.question("nhap id khach hang: ");
    for (let i = 0; i < listProduct.listProduct.length; i++) {
        console.log(`id sp: ${listProduct.listProduct[i].id}, ten sp: ${listProduct.listProduct[i].name},so luong sp: ${listProduct.listProduct[i].quality}`);
    }
    let idOder = +input.question("nhap id hoa don: ")
    let idProduct = +input.question("nhap id san pham: ");

    let amount = +input.question("nhap so luong can mua: ");
    let product = listProduct.findProductById(idProduct);

    listProduct.update(idProduct,new Product(product.id,product.name,product.quality - amount));

    let customer = listCustomer.findCustomerById(id);
    let time = new Date();
    let today = `${time.getDate()}/${time.getMonth()+1}`;
    product.quality = amount;

    let orderDetail = new OrderDetail(idOder,customer,today);
    orderDetail.add(product);
    orderManage.add(orderDetail);

}

function showOrder(){
    orderManage.findAll();
}

mainMenu();