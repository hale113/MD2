export class Product{
    private _id: number;
    private _name: string;
    private _quality: number;


    constructor(id: number, name: string, quality: number) {
        this._id = id;
        this._name = name;
        this._quality = quality;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get quality(): number {
        return this._quality;
    }

    set quality(value: number) {
        this._quality = value;
    }
}