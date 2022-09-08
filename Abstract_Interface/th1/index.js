"use strict";
exports.__esModule = true;
var Tiger_1 = require("./Animal/Tiger");
var Chicken_1 = require("./Animal/Chicken");
var Apple_1 = require("./Fruit/Apple");
var Orange_1 = require("./Fruit/Orange");
console.log('-------Animal------');
var animal = [];
animal[0] = new Tiger_1.Tiger();
animal[1] = new Chicken_1.Chicken();
animal.forEach(function (item, index) {
    console.log(item.makeSound());
    if (item instanceof Chicken_1.Chicken) {
        console.log(item.howToEach());
    }
});
console.log('----Fruit----');
var fruit = [];
fruit[0] = new Apple_1.Apple();
fruit[1] = new Orange_1.Orange();
fruit.forEach(function (item) {
    console.log(item.howToEach());
});
