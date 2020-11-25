//Use of ARROW function
/*
var magic = function() {
    return new Date();
};

OR 

var magic =  () => new Date();
//No need of function keyword
//No need of curly braces
//No need of return kewyord 
// JUST:-    () => ;                 


//Arrow function with parameters
var myConcat = function(arr1, arr2){
    return arr1.concat(arr2); 
};
//OR 

var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));     



//High order arrow functions
const realNumberArray = [4, 5.6, -7.8, 3, -6, 8];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);    



// HIGHER orer arrow functions

const increment = (function(){
    return function increment(number, value = 1){
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));     

//SAME AS BELOW
function increment(num, value =1){
    return num + value;
}
increment(5);
console.log(increment(5));
console.log(increment(5,2));

//OR shorter version

const increment = (num, value = 1) => num + value;
console.log(increment(5));
console.log(increment(5,2));        



//Use of Rest operator with function parameter

function sum(x,y,z){
    const args = [x,y,z];
    return args.reduce( (a,b) => a + b, 0);
};
console.log(sum(1,2,3));      

//now using rest operator, we can put any number of arguments
function sum(...args){
     return args.reduce( (a,b) => a + b, 0);
};
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5));    



//Spread operator 
const arr1 = ['JAN', 'FEB', 'Mar', 'APR', 'MAY'];
let arr2;
(function (){
        arr2 = [...arr1];
        arr1[0] = 'potato';
})();
console.log(arr2);              



//Destructuring variables 
var voxel = { x:1, y:2, z:3 };

//old way to split
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//New method
const { x:a, y:b, z:c } = voxel;      



const [z,x] = [1,2,3,4,5,6];
console.log(z,x);

const [z,x, ,y] = [1,2,3,4,5,6];
console.log(z,x,y);     



//Remove first 2 elements from an array (using REST Operator)
const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list){
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);    





//Destructring assignment
//Just passing what we need (concept used in API function calls)
const stats = {
    max: 12.5,
    min: -0.5,
    median: 23.5,
    mode: 34.0,
    average: 35.65
};
// const half = (function(){
//     return function half(stats){    // one way is by passing entire object
//         return (stats.max + stats.min)/2 ;
//     }
const half = (function(){
    return function half({max, min}){  // { using Detructuring } other way is by passing required property only
        return (max + min)/2.0 ;
    }
})();
console.log(stats);
console.log(half(stats));        




//create String using Template Literals 
const person = {
    name: "JOY",
    age: 20
};

const greet = ` Hello, my name is ${person.name}.
    I am ${person.age} years old.`;

console.log(greet);


//Challenge
const result = {
    success: ["max-marks", "Top-Scorer", "WIN"],
    failure: ["min-marks", "least-Scorer", "LOST"],
    skipped: ["no-marks", "no-score", "Not Attempted"],
};
function makeList(arr) {
    const resultDisplayArray = [];

    for(let i=0; i<arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>)`)
    }
    return resultDisplayArray;
}
console.log(makeList(result.success));      






const person = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    }; 
};
console.log(person("Karen", 20, "Female")); 

//Shorter way 
const person = (name, age, gender) => ({name, age, gender});
console.log(person("Karen", 20, "Female"));     






//This keyword

const bicycle = {
    gear: 2,
    setGear: function (newGear){    // OR  setGear(newGear) {}
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);   





//use class syntax to define a constructor function
//Constructor function
//old way
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle("Jupiter");  //using new keyword to instantiate a object
console.log(zeus.targetPlanet);   


//new way
class SpaceShuttle {
    constructor (targetPlanet){
        this.targetPlanet = targetPlanet;
    } 
}
var zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);    


function makeClass(){
class Vegetable {
    constructor(name){
        this.name = name;
    }
}
    return Vegetable;
};
const Vegetable = makeClass();
const pumpkin = new Vegetable("pumpkiin");
console.log(pumpkin.name);  */





