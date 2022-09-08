import {Shape} from "./Shape";

export class Triangle extends Shape {
    side1: number;
    side2: number;
    side3: number;

    constructor(side1: number, side2: number, side3: number, name: string, color: string) {
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    public getPerimeter(): number {
        return this.side1 + this.side2 + this.side3;
    }

    public getArea(): number {
        let p: number = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
    }
}

let triangle = new Triangle(3, 4, 5, "tam giác", "xanh")
console.log(triangle)
console.log(triangle.getArea())
console.log(triangle.getPerimeter())