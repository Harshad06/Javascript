// Comment
console.log("Hello There");

let name= 'Joy';
console.log(name);

// Cannot be a reserved keyword 
// Should be meaningful
// Cannot start with a number (1name)
// cannot contain a space or hyphen 
// Use CameL notation
// Are case-sensistive


let firstName='Joy', lastName='Shringi'; 
console.log(firstName,lastName);

// Use of const 
// when you don't need to reassign value , use const instead of
//let price = 0.3;
const price = 1;
console.log(price);



let name = 'Joy'; //String literal
let age =30;      //Number literal
let isApproved = true;  // Boolean 
let firstName; // undefined
let lastName = null;

//Object
let person = {
    name: 'Joy',
    age: 30
};
console.log(person);
console.log(person.age);


//Array
let selectedColors= ['red', 'blue'];
selectedColors[2]='green';
selectedColors[2]= 1;
console.log(selectedColors);
console.log(selectedColors[2]);

//Functions
//Performing a task
function greet(){
    console.log('Hello Bellow');
}

greet();

//Passing Parameter
function greet(name){
    console.log('Hello ' + name);
}

greet('John'); // 'John' is an argument to parameter 'name'

//Multiple arguments
function greet(name, lastName){
    console.log('Hello ' + name +' '+ lastName);
}

greet('John', 'Smith'); 

//Calculating a value

function square(number){
    return number*number ;
}
square(2);

let num = square(2);
console.log(num);   //4

//OR
function square(number){
    return number*number ;
}

console.log(square(2)); //4 ; here 2 fucntions are used - square & log