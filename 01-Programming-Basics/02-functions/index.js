// functions

function funcName() {
    console.log("Namaste 🙏");
    
} // this si function declartion

funcName()// this sis calling the function code will be executed

// greeting with different name
// this is dynamic fu ction
function greet(name) {
   return (`Namaste 🙏 ${name}`);
    
    
}
console.log(greet("AKahy"));
console.log(greet("Salena"));
console.log(greet("John"));
console.log(greet("kesee"));


// task create a function that can add 2 values
function add(a, b) {
    return a + b;  
}
let value = add(10, 20);
console.log(value);


// if...else 
function eligibleCheck(age) {
    if (age >= 18) {
            return "person is eligible to vote"
    } else {
        return "person is not eligible to vote"
        }
    }

const results = eligibleCheck(14);
console.log(results);

// even or odd number 
function evenOdd(x) {
    if (x % 2 === 0) {
        return "Even Number"
    } else {
        return "Odd Number"
    }
}

const returnResult = evenOdd(3);
console.log(returnResult);



