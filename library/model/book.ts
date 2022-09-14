import {Library} from "./library";

export class Book extends Library {
    author: string;
    Page: number;

    constructor(id: number, quantity: number, producer: string, author: any, Page: any) {
        super(id, quantity, producer);
        this.author = author;
        this.Page = Page;
    }
}