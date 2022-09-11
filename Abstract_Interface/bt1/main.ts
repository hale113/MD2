import {Circle} from "./Circle";
import {Rectangle} from "./Ractangle";
import {Square} from "./Square";

let resizeableList = [];

let circle: Circle = new Circle("hinh tron",4)
let rectangle:Rectangle = new Rectangle(5,7,"hcn")
let square: Square = new Square("hv");

resizeableList.push(circle);
resizeableList.push(rectangle);
resizeableList.push(square);

console.log(circle.resize(10));

