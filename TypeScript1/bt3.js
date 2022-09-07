var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(name, gender, birthday, email, phoneNumber) {
        this._name = "";
        this._gender = Gender.OTHER;
        this._email = "";
        this._phoneNumber = "";
        this._name = name;
        this._gender = gender;
        this._birthday = birthday;
        this._email = email;
        this._name = name;
        this._phoneNumber = phoneNumber;
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (value) {
            this._birthday = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        set: function (value) {
            this._phoneNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var EmployeeList = /** @class */ (function () {
    function EmployeeList() {
        this.obj = [];
    }
    EmployeeList.prototype.add = function (a) {
        this.obj.push(a);
    };
    EmployeeList.prototype.show = function () {
        return this.obj;
    };
    EmployeeList.prototype["delete"] = function (b) {
        this.obj.splice(b, 1);
    };
    return EmployeeList;
}());
var employee1 = new Employee("Le Anh Van", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789");
var employee2 = new Employee("Mai Anh Dao", Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790");
var employee3 = new Employee("Mai Em Dao", Gender.FEMALE, new Date("1997-01-12"), "btrasadsads@gmail.com", "012435466790");
var employeeList = new EmployeeList();
employeeList.add(employee1);
employeeList.add(employee2);
employeeList.add(employee3);
employeeList["delete"](0);
console.log(employeeList.show());
