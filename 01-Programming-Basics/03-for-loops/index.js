// for loops 
let x = 5;
for (let i = 0; i < x; i++){
    console.log(i + " " + "Hello World" + " "+ x);
    
}

for(let i = 3; i < 5; i++) {
    console.log("Hiee");
    
}
for (let i = 2; i < 9; i=i+2){
    console.log("hw" + " "+ (i+2));
    
}

for (let i = 5; i > 0; i--){
    console.log("Namaste");
    
}

for (let i = 5; i < 4; i++){
    console.log("hi");
    
}
for (let i = 0; i < 0; i++){
    console.log("hi");
    
}
// for (let i = 1; i > 0; i++){
//     console.log("hi");
    
// } this is infinatie loop

// function inside loop

// function greet(){
//     console.log("Namaste!");
    
// }

// for (let i = 0; i < 10; i++){
//     greet()
// }


// arrays with loops
let arr =[2,7,6,4,2,0]
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    
}

let arr1=[10,7,5,0,8]
for (let i = 0; i < arr1.length; i++){
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i] + "" + " is even");
        
    }
}

// while loop
let i = 0;
while (i < 5) {
    console.log("hello world");
    i++
}

