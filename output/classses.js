"use strict";
/*
    typescript is mainly here to provide assistance to developers.
    It helps developers write better and error free javascript code.
*/
/*
    we can define a better signature of anything with class.
    class is blueprint of object
*/
//by default access modifier is public
class Student {
    constructor(roll, name, age) {
        this.roll = roll,
            this.name = name,
            this.age = age;
    }
    printInfo() {
        console.log(`Roll : ${this.roll}, Name : ${this.name}, Age : ${this.age}`);
    }
}
;
const s1 = new Student(101, 'Rupak', 30);
const s2 = new Student(102, 'Dhara', 2);
console.log(`s1 : ${s1.printInfo()}, s2 : ${s2.printInfo()}`);
const students = [];
students.push(s1);
students.push(s2);
