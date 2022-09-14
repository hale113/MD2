import {Cadres} from "./cadres";

export class EmployeeManager {
    static list: Cadres[] = [];

    constructor() {
    }

    static add(cadres: Cadres): void {
        this.list.push(cadres)
    }

    static show(): void {
        console.log(this.list);
    }

    static searchByName(name: string) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name == name) {
                return this.list[i];
            }
        }
    }

    static find(id: number): number {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id == id) {
                return i
            }
        }
        return -1;
    }

    static deleteById(id: number) {
        let index = this.find(id)
        this.list.splice(index, 1);
    }

    // //xóa dung ham filter
    // static deleteByFilter(id: number) {
    //     this.list = this.list.filter((item) =>
    //         item.id != id
    //     );
    //     console.log(this.deleteById(id))
    // }

    static edit(index: number, name: string) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id == index) {
                this.list[i].name = name
            }
        }
        console.log(this.list)
    }
    //     this.list.forEach((item)=>{
    //         if (item.id == index){
    //             item.name = name;
    //         }
    //     })
    //     console.log(this.list)
    // }
}