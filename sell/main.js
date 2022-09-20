"use strict";
exports.__esModule = true;
var productManagement_1 = require("./servike/productManagement");
var customerManagement_1 = require("./servike/customerManagement");
var product_1 = require("./model/product");
var orderDetailManagement_1 = require("./servike/orderDetailManagement");
var customer_1 = require("./model/customer");
var orderDetail_1 = require("./model/orderDetail");
var input = require('readline-sync');
var listProduct = new productManagement_1.ProductManagement();
var listCustomer = new customerManagement_1.CustomerManagement();
var orderManage = new orderDetailManagement_1.OrderDetailManagement();
function mainMenu() {
    var menu = "\n    --------------==========-------------\n    1. san pham\n    2. khach hang\n    3. mua san pham\n    4. hoa don\n    0.thoat\n    ---------------===========-------------\n    ";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("lua chon cua ban: ");
        switch (choice) {
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
                showOrder();
                break;
            case 0:
                break;
        }
    } while (choice != 0);
}
function addCustomer() {
    var id = +input.question("nhap id khach hang: ");
    var name = input.question("nhap ten khach hang: ");
    listCustomer.add(new customer_1.Customer(id, name));
}
function addProduct() {
    var id = +input.question("nhap id sp: ");
    var name = input.question("nham ten sp: ");
    var quality = +input.question("nhap so luong: ");
    var product = new product_1.Product(id, name, quality);
    listProduct.add(product);
}
function showMenuProduct() {
    var menu = "\n   -------Menu Product--------\n   1. them\n   2. xoa \n   3. sua\n   4. hien thi\n   0. thoat\n   ";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("lua chon cua ban: ");
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                break;
            case 4:
                showListProduct();
                break;
        }
    } while (choice != 0);
}
function showListProduct() {
    console.log(listProduct.findAll());
}
function buyProduct() {
    var id = +input.question("nhap id khach hang: ");
    for (var i = 0; i < listProduct.listProduct.length; i++) {
        console.log("id: ".concat(listProduct.listProduct[i].id, ", ten: ").concat(listProduct.listProduct[i].name, ",so luong: ").concat(listProduct.listProduct[i].quality));
    }
    var idOder = +input.question("nhap id hoa don: ");
    var idProduct = +input.question("nhap id san pham: ");
    var amount = +input.question("nhap so luong can mua: ");
    var product = listProduct.findProductById(idProduct);
    listProduct.update(idProduct, new product_1.Product(product.id, product.name, product.quality - amount));
    var customer = listCustomer.findCustomerById(id);
    var time = new Date();
    var today = "".concat(time.getDate(), "/").concat(time.getMonth() + 1);
    product.quality = amount;
    var orderDetail = new orderDetail_1.OrderDetail(idOder, customer, today);
    orderDetail.add(product);
    orderManage.add(orderDetail);
}
function showOrder() {
    orderManage.findAll();
}
mainMenu();
