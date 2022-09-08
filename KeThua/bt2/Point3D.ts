import {Point2D} from "./Point2D";

export class Point3D extends Point2D{
    protected z: number;
    constructor(z: number, x: number, y: number) {
        super(x,y);
        this.z = z;
    }
    public getZ(): number{
        return this.z;
    }
    public setZ(z: number){
        this.z = z;
    }
    public getXYZ(): object{
        return {x: this.x, y: this.y, z: this.z}
    }
    public setXYZ(x: number, y: number, z: number): void{
        this.x = x;
        this.y = y;
        this.z = z;
    }
}