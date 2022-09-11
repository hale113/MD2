import {Square} from "./Square";
import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";
let list = [];

let square = new Square("ed",4);
let circle = new Circle("ac",5);
let cylinder = new Cylinder("hl",6,7)
list.push(square);
list.push(circle);
list.push(cylinder);

list.forEach((item, index2)=>{
    if(item instanceof Square){
        console.log(item.howToColor());
    }else {
        console.log(item.calculateArea())
    }
})


