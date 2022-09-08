import {Tiger} from "./Animal/Tiger";
import {Chicken} from "./Animal/Chicken";
import {Apple} from "./Fruit/Apple";
import {Orange} from "./Fruit/Orange";

console.log('-------Animal------')
let animal = [];

animal[0] = new Tiger();
animal[1] = new Chicken();

animal.forEach((item,index)=>{
    console.log(item.makeSound());
    if(item instanceof Chicken){
        console.log(item.howToEach())
    }
})
console.log('----Fruit----');
let fruit = [];

fruit[0] = new Apple();
fruit[1] = new  Orange();

fruit.forEach(item=>{
    console.log(item.howToEach())
})