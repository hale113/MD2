import {Staff} from "./staff";

export class EmployeeManager {
    static list: Staff[] = [];
    constructor() {
    }
    static add(staff: Staff){
        this.list.push(staff)
    }
    static Show(){
        console.log(this.list);
    }
    static delete(id: number){
        let  index = this.find(id);
        this.list.splice(index,1)
    }
    static find(id: number):number{
        for(let i=0; i<this.list.length;i++){
            if (this.list[i].id ==id){
                return i;
            }
        }
        return -1
    }
    static deleteByFilter(id:number){
        this.list = this.list.filter((item)=>
            item.id != id
        );
    }

}