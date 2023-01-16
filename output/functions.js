"use strict";
let myFunc;
//now we have defined myFunc to be a function. we can't assign any other type to myFunc now. 
//myFunc = 4; // it will show error. it must have to hold a function.
myFunc = () => {
    console.log(`Hi there !`);
};
//function parameters
const printSomething = (a, b) => {
    console.log(`Hello ${a}, ${b}`);
};
//printSomething('Rupak', 5); //it will show error as both parameters must have to be string.
printSomething('Rupak', 'Dhara'); //now it's okay
//optional parameter
//here y is optional parameter. No need to pass the value if it's not required.
const printVal = (x, y) => {
    console.log(`x : ${x}`);
};
printVal('Arpa');
//default value in function
const printDefaultVal = (x, y = 'Audrika') => {
    console.log(`x : ${x}, y : ${y}`);
};
//print the default value of y if value is not provided
printDefaultVal('Anu');
printDefaultVal('Anu', 'Shuvra');
//function return type
/*
    undefined vs void :
    
    in js a javascript function returns undefined if nothing is retured explicitly.
    but in tyscript it returns void if nothing is returned explicitly.

    void and undefined are two different things. void is nothing. on the other hand undefined represents a value.
*/
// typescript automatically identifies the return type of the function. That is string in this case.
const funcOne = (a, b) => {
    return a + b;
};
funcOne('John', 'David');
