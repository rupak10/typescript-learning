//define your own type
type stringOrNum = string | number;
type userType = {
    name : string,
    age : number
};

const userDetails = (
    // id : string | number,
    id : stringOrNum,
    user : userType
) => {
    console.log(`User Id : ${id}, name : ${user.name}, age : ${user.age}`);
};


// const sayHi = (user : {name : string, age : number}) => {
//     console.log(`Hi ${user.name}, Your age : ${user.age}`);
// };

const sayHi = (user : userType) => {
    console.log(`Hi ${user.name}, Your age : ${user.age}`);
};

userDetails(
        101,
         {
            name : 'rupak',
            age : 30
        }
);