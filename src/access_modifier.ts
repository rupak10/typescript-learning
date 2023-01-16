class Employee {
    /*
        private properties are not accessible outside the class.
        only accessible within the class. 
        readonly property can be read only outside the class. 
    */

    /*
        Default access modifier is public.
        That means if you don't use any modifier, it will be public by default.
    */ 

    private empId : number;
    private name : string;
    private age : number;
    readonly salary : number;

    constructor(empId: number, name: string, age: number, salary: number){
        this.empId = empId;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public getEmpId(){
        return this.empId;
    }

    public printEmpInfo(){
        console.log(`EmpId : ${this.empId}, Name : ${this.name}, Age : ${this.age}, Salary : ${this.salary}`);
    }
}

const e1 = new Employee(495, 'Rupak Kumar Das', 30, 70000);
console.log(`salary : ${e1.salary}`);
console.log(`Employee Id : ${e1.getEmpId()}`);
