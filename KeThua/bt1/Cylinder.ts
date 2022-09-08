import {Circle} from "./Circle";
export class Cylinder extends Circle{
    private height: number;
    constructor(height: number,radius: number,color: string) {
        super(radius,color);
        this.height = height;
    }
    public getHeight(): number{
        return this.height;
    }
    public setHeight(height: number){
        this.height = height;
    }
    public getVolume(): number{
        return this.getRadius()*this.getRadius()*this.height*Math.PI;
    }

}