//we can also use type to achieve such kind of thing
/*
function drawRectangle(options : {width : number, height : number}) {
    let width = options.width;
    let height = options.height;
    return width * height;
}
*/
function drawRectangle(options) {
    let width = options.width;
    let height = options.height;
    console.log(width * height);
}
drawRectangle({
    width: 20,
    height: 30
});
class Dog {
    bark() {
        console.log('dog is barking..');
    }
}
const dog = new Dog();
dog.bark();
export {};
