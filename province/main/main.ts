import {ManagePerson} from "../servike/managePerson";
import {ManageProvince} from "../servike/manageProvince";
import {Person} from "../model/person";
class Main{
   input = require('readline-sync');
   managePerson: ManagePerson = new ManagePerson();
   manageProvince: ManageProvince = new ManageProvince();
   menu(){
      let menu=`
      -----------
      1. them  nguoi
      2.hien thi
      -----------
      `
      let choice:number;
      do{
         console.log(menu);
         choice = + this.input.question('nhap lua chon');
         switch (choice){
            case 1:
               let id = +this.input.question("nhap id: ");
               let name = +this.input.question("nhap ten: ");
               let age = +this.input.question("nhap tuoi: ");
               this.manageProvince.finAll();
               let indexOfProvince = +this.input.question("Nhap vao stt tinh: ")
               this.managePerson.add(new Person(id, "name", age, this.manageProvince.findByIndex(indexOfProvince-1)))
               break;
            case 2:
               this.managePerson.finAll();
               break;
         }
      }
      while (choice!=0);
   }
}
let main = new Main();
main.menu();