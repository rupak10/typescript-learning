"use strict";
/*
    reusable block of code can be achieved through generics
*/
/*
const addId = (obj : object) => {
    const id = Math.floor(Math.random() * 50);
    return {...obj, id}
};
*/
//after using generics
//T must be object. you can't send string, number or anything else
const addId = (obj) => {
    const id = Math.floor(Math.random() * 50);
    return Object.assign(Object.assign({}, obj), { id });
};
//this will generate error as it is not object
//let name = 'Dhara';
//let u = addId(name);
let user = addId({
    name: 'Rupak',
    age: 30,
    salary: 70000
});
console.log(user.id);
console.log(user.name);
console.log(user.age);
console.log(user.salary);
