export class Player {
    name : string;
    age : number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    printInfo(){
        console.log(`Name : ${this.name}, Age : ${this.age}`);
    }
}