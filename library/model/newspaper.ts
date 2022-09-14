import {Library} from "./library";

export class Newspaper extends Library{
    releaseDate: number;

    constructor(id: number, quantity: number, producer: string, releaseDate: any) {
        super(id, quantity, producer);
        this.releaseDate = releaseDate;
    }
}