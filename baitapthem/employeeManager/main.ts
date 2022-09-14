import {Cadres} from "./cadres";
import {EmployeeManager} from "./employeemanager";

let cadres1: Cadres = new Cadres(2, "Lê Trung Thanh", 20, "nam", "hà nội");
let cadres2: Cadres = new Cadres(4, "Lê An Hoa", 27, "nữ", "hà nội");
let cadres3: Cadres = new Cadres(6, "Lê Hân An", 15, "nữ", "hà nội");

EmployeeManager.add(cadres1);
EmployeeManager.add(cadres2);
EmployeeManager.add(cadres3);
EmployeeManager.show();
console.log("-------tìm theo tên-------")
console.log(EmployeeManager.searchByName("Lê An Hoa"));
console.log("----sau xóa----");
EmployeeManager.deleteById(4);
EmployeeManager.show();
console.log("----sau sửa----")
EmployeeManager.edit(6, "đức")



