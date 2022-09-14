import {Library} from "./library";

export class Magazine extends Library{
    issueNumber: number;
    releaseMonth: number;

    constructor(id: number, quantity: number, producer: string, issueNumber: any, releaseMonth: any) {
        super(id, quantity, producer);
        this.issueNumber = issueNumber;
        this.releaseMonth = releaseMonth;
    }

}