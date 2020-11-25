//var & let Keyword
//var keyword can be used to reassign the values again and again in the code 
//let keyword does not allow reassign the value but we can change the value if need be
/*
var catName = "Quincy";
var catName = "Beau";
console.log(catName);

let dogName = "Muffy";
let dogName = "Fluffy";
console.log(dogName);  //error as same assignment is done twice

let dogName = "Muffy";
dogName = "Fluffy";
console.log(dogName); // correct no error   



//Scope of var or let variables
let name = "Swiss";
let quote;

name = "Vienna";

function testScope(){
    "use strict";

    name = "Canada";
    quote = name + " is a great name";

    return quote;
}
testScope();
console.log(testScope());      



function checkScope(){
    "use strict";
    //var i = "function scope";
    let i = "function scope";
    if(true){
        // i = "block scope";
        let i = "block scope";
        console.log("Scope of 'i' is: " + i);
    }
    console.log("Scope of 'i' is: " + i);
    return i;
}

checkScope();     

//NOTE: "let" keyword is confined to the block scope only.
//   whereas, "var" scope is kind of globa, can be accesses from anywhere. 



//Declring a read only variable with "const" keyword
function printManyTimes(str){
    "use strict";

    const SENTENCE = str + " is cool";


    for (let i = 0; i < str.length; i+=2){
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");      */




