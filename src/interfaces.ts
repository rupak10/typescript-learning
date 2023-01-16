import {Animal} from './intefaces/Animal.js'; 

/*
    interface can be used to give structre to object.
    also it can be used to to give structure to class 
*/

interface RectangelOptions {
    width : number;
    height : number;
}

//we can also use type to achieve such kind of thing

/*
function drawRectangle(options : {width : number, height : number}) {
    let width = options.width;
    let height = options.height;
    return width * height;
}
*/
function drawRectangle(options : RectangelOptions) {
    let width = options.width;
    let height = options.height;
    console.log(width * height);
}
drawRectangle({
    width: 20,
    height : 30
});


class Dog implements Animal {
    bark() {
        console.log('dog is barking..');
    }
}

const dog = new Dog();
dog.bark();
