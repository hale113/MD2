export class Student {
    _name: string;
    _score: number;

    constructor(name: string, score: number) {
        this._name = name;
        this._score = score;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }
}