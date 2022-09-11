"use strict";
exports.__esModule = true;
var staff_1 = require("./staff");
var employeeManager_1 = require("./employeeManager");
var enum_1 = require("./enum");
function main() {
    var staff = new staff_1.Staff(1, "lan", "20/3/2000", "hà nội", enum_1.Role.CEO);
    var staff2 = new staff_1.Staff(2, "hoa", "11/6/2006", "thanh hóa", enum_1.Role.Sale);
    var staff3 = new staff_1.Staff(3, "hân", "25/6/2003", "hung yen", enum_1.Role.Sale);
    employeeManager_1.EmployeeManager.add(staff);
    employeeManager_1.EmployeeManager.add(staff2);
    employeeManager_1.EmployeeManager.add(staff3);
    console.log(employeeManager_1.EmployeeManager.Show());
    employeeManager_1.EmployeeManager.deleteByFilter(3);
    console.log("sau xóa");
    console.log(employeeManager_1.EmployeeManager.Show());
}
main();
