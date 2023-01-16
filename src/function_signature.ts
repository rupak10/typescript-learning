//defining a function structure just like variable
let calculation : (x : number, y : number, z : string) => number;

calculation = (x : number, y: number, z : string) => {
    if(z === 'add'){
        return x + y;
    }
    else{
        return x - y;
    }
};

console.log(calculation(5, 6, 'add'));