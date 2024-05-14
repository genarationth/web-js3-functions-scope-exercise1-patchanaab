function add(a, b) {
    return a + b;
}
console.log(add(3,6));

function subtract(a, b) {
    return a - b;
}
console.log(subtract(50,23));

function  multiply(a,b){
    return a * b;
}
console.log(multiply(10,2));

function  divide(a,b){
    return a / b;
}
console.log(divide(9,3));

const a = 20 ;
const b = 10 ;

console.log(add(a,b));
console.log(subtract(a,b));
console.log(multiply(a,b));
console.log(divide(a,b));

//  EXERCISE 1.2
inform("Bas", "SamutPrakarn", "sleeping");

function inform(firstName, location, hobby) {
    console.log("Hi, my name is " + firstName + ". I live in " + location + " and enjoy " + hobby + ".");
}
