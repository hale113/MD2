import {Staff} from "./staff";
import {EmployeeManager} from "./employeeManager";
import {Role} from "./enum"

function main() {
    let staff: Staff = new Staff(1, "lan","20/3/2000","hà nội",Role.CEO);
    let staff2: Staff = new Staff(2,"hoa","11/6/2006","thanh hóa",Role.Sale);
    let staff3: Staff = new Staff(3,"hân","25/6/2003","hung yen",Role.Sale);

    EmployeeManager.add(staff);
    EmployeeManager.add(staff2);
    EmployeeManager.add(staff3);
    console.log(EmployeeManager.Show());
    EmployeeManager.deleteByFilter(3);
    console.log("sau xóa");
    console.log(EmployeeManager.Show())
}
main();