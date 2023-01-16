let studentName = 'Rupak';
const multiply = (a : number, b : number) => {
    return a*b;
};
console.log(multiply(10, 25));

const student = {
    name: 'Dhara',
    age : 2,
    group : 'science',
    isCr : true
};
console.log(student);

//explicit type assign
let a:string;
let b:number;

//c can hold string or number
let c : string | number;

//array type assign

//string array
let arr:string[] = [];

//number array
let numArr:number[] = [];

//mixed array. string or number
let mixedArr:(string | number)[] = [];

//object 
//defining type of object properties
let obj : {
    name : string,
    age : number,
    adult : boolean
};

obj = {
    name : 'Rupak',
    age : 30,
    adult : true
};