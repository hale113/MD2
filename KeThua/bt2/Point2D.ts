export class Point2D {
    protected x: number;
    protected y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public getX(): number{
        return this.x;
    }
    public setX(x: number): void{
        this.x = x;
    }
    public getY(): number{
        return this.y;
    }
    public setY(y: number): void{
        this.y = y;
    }
    public getXY():object{
        return {x: this.x, y: this.y}
    }
    public setXY(x: number, y: number): void{
        this.x = x;
        this.y = y;
    }
}