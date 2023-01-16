"use strict";
//defining a function structure just like variable
let calculation;
calculation = (x, y, z) => {
    if (z === 'add') {
        return x + y;
    }
    else {
        return x - y;
    }
};
console.log(calculation(5, 6, 'add'));
