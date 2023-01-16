"use strict";
const userDetails = (
// id : string | number,
id, user) => {
    console.log(`User Id : ${id}, name : ${user.name}, age : ${user.age}`);
};
// const sayHi = (user : {name : string, age : number}) => {
//     console.log(`Hi ${user.name}, Your age : ${user.age}`);
// };
const sayHi = (user) => {
    console.log(`Hi ${user.name}, Your age : ${user.age}`);
};
userDetails(101, {
    name: 'rupak',
    age: 30
});
