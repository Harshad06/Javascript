//Getter and Setter to control access
/*
 class Book {
     constructor(author){
         this._author = author;
     }
     //getter
     get writer(){
         return this._author;
     }
     //setter
     set writer(updatedAuthor){
         this._author = updatedAuthor;
     }
 }                      




//Challenge
 function makeClass (){
    class Thermostat{
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return  this._temp;
        }
    set temperature(updatedTemp){
        this._temp = updatedTemp;
        }
    }
    return Thermostat;
 }

 const Thermostat = makeClass();
 const thermos = new Thermostat(76);
 let temp = thermos.temperature;     // No () as is a property
 thermos.temperature = 26;
 temp = thermos.temperature;    
 console.log(temp);                 



//example
  function makeClass(){
      class calc {
          constructor(value){
              this._value = 5 * value;
          }
          get multiply(){
              return this._value;
          }
          set multiply(updatedValue){
              this._value = updatedValue;
          }
      }
      return calc;
  }

  const calc = makeClass();
  const calculation = new calc(5);
  let value = calculation.multiply;
  calculation.multiply = 50;
  value = calculation.multiply;
  console.log(value);              */
  