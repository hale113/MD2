export class Library {
    _id: number;
    _quantity: number;
    _producer: string;


    constructor(id: number, quantity: number, producer: string) {
        this._id = id;
        this._quantity = quantity;
        this._producer = producer;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get producer(): string {
        return this._producer;
    }

    set producer(value: string) {
        this._producer = value;
    }
}