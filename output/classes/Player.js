export class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log(`Name : ${this.name}, Age : ${this.age}`);
    }
}
