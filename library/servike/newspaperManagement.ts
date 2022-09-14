import {Newspaper} from "../model/newspaper";
export class NewspaperManagement{
    list: Newspaper[] = [];
    constructor() {
    }
    add(newspaper: Newspaper){
        this.list.push(newspaper);
    }
    show(): void{
        console.log(this.list)
    }
    deleteByDocumentCode(id: number){
        let index = this.findByDocumentCode(id);
        this.list.splice(index,1)
    }
    findByDocumentCode(id: number){
        for (let i = 0; i <this.list.length ; i++) {
            if (this.list[i].id == id){
                return i
            }
        }
        return  -1;
    }
}