"use strict";
class Employee {
    constructor(empId, name, age, salary) {
        this.empId = empId;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getEmpId() {
        return this.empId;
    }
    printEmpInfo() {
        console.log(`EmpId : ${this.empId}, Name : ${this.name}, Age : ${this.age}, Salary : ${this.salary}`);
    }
}
const e1 = new Employee(495, 'Rupak Kumar Das', 30, 70000);
console.log(`salary : ${e1.salary}`);
console.log(`Employee Id : ${e1.getEmpId()}`);
