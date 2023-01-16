/*
    dynamic type or any type. 
    define a variable to hold any type of value.
*/

//variable
let x : any;

//array
let y : any[] = [];
y.push(5);
y.push('rupak.cse010@gmail.com');

//object
let z : {
    name : any,
    age : any
};
//now name, age can hold any value


/*
    note : we should make less use of any type in tyscript. as typescript
    was invented to impose type to variables. 
*/