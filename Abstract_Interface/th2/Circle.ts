export class Circle{
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    getRadius(): number {
        return this.radius;
    }

    setRadius(value: number) {
        this.radius = value;
    }
    toString(): string {
        return "A Circle with radius="
            + this.getRadius();
    }
}
